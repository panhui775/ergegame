package org.mygame.fingertip;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import org.mygame.fingertip.cmdHandler.CmdHandlerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ServerMain {
    private static final Logger LOGGER = LoggerFactory.getLogger(ServerMain.class);

    public static void main(String[] args) {
        CmdHandlerFactory.init();
        GameMsgRecognizer.init();

        EventLoopGroup bossGroup = new NioEventLoopGroup(); //接待线程
        EventLoopGroup workerGroup = new NioEventLoopGroup(); //服务线程
        ServerBootstrap b = new ServerBootstrap();
        b.group(bossGroup,workerGroup);
        b.channel(NioServerSocketChannel.class);// 服务器信道的处理方式
        b.childHandler(new ChannelInitializer<SocketChannel>() { // 客户端信道的处理器方式
            @Override
            protected void initChannel(SocketChannel socketChannel) throws Exception {
                socketChannel.pipeline().addLast(
                        new HttpServerCodec(),
                        new HttpObjectAggregator(65535),
                        new WebSocketServerProtocolHandler("/websocket"),
                        new GameMsgDecoder(), // 自定义的消息解码器
                        new GameMsgEncoder(), // 自定义的消息编码器
                        new GameMsgHandler() // 自定义的消息处理器
                );
            }
        });

        try {
            // 绑定 12345 端口,
            // 注意: 通常会根据main方法中的参数args指定绑定端口
            ChannelFuture f = b.bind(12345).sync();

            if (f.isSuccess()) {
                LOGGER.info("服务器启动成功");
            }

            // 等待服务器信道关闭,
            // 也就是不要退出应用程序,
            // 让应用程序可以一直提供服务
            f.channel().closeFuture().sync();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
