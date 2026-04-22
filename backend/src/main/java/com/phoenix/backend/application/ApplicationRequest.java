package com.phoenix.backend.application;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ApplicationRequest(
        @NotBlank
        @Size(min = 2, max = 120)
        String fullName,

        @NotBlank
        @Email
        @Size(max = 160)
        String email,

        @NotBlank
        @Size(min = 8, max = 20)
        @Pattern(regexp = "^[+()0-9\\s-]+$")
        String phone,

        @NotBlank
        @Size(min = 2, max = 160)
        String companyName,

        @NotBlank
        @Size(max = 200)
        @Pattern(
                regexp = "^(https?://)?([\\w-]+\\.)+[\\w-]{2,}(/.*)?$",
                message = "companyWebsite must be a valid domain or URL"
        )
        String companyWebsite,

        @NotBlank
        @Size(min = 2, max = 80)
        String plan,

        @AssertTrue
        boolean privacyAccepted
) {
}
