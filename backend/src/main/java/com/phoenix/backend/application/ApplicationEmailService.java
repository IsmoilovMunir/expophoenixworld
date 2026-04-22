package com.phoenix.backend.application;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ApplicationEmailService {

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

    public void sendApplication(ApplicationRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(mailFrom);
        message.setTo(mailTo);
        message.setReplyTo(request.email());
        message.setSubject("New expo application");
        message.setText(buildMessage(request));
        mailSender.send(message);
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
