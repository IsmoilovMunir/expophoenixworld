package com.phoenix.backend.application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ApplicationEmailService {

    private static final Logger log = LoggerFactory.getLogger(ApplicationEmailService.class);

    private final JavaMailSender mailSender;
    private final String mailFrom;
    private final String mailTo;

    public ApplicationEmailService(
            JavaMailSender mailSender,
            @Value("${app.mail.from}") String mailFrom,
            @Value("${app.mail.to}") String mailTo
    ) {
        this.mailSender = mailSender;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
    }

    @Async
    public void sendApplication(ApplicationRequest request) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(mailFrom);
            message.setTo(mailTo);
            message.setReplyTo(request.email());
            message.setSubject("New expo application");
            message.setText(buildMessage(request));
            mailSender.send(message);
        } catch (Exception e) {
            log.error("Failed to send application email for {}", request.email(), e);
        }
    }

    private String buildMessage(ApplicationRequest request) {
        return """
                New application from Expo Phoenix website

                Full name: %s
                Email: %s
                Phone: %s
                Company: %s
                Website: %s
                Plan: %s
                """.formatted(
                request.fullName(),
                request.email(),
                request.phone(),
                request.companyName(),
                request.companyWebsite(),
                request.plan()
        );
    }
}
