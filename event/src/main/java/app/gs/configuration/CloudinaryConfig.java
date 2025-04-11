package app.gs.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "dugltg4qz",
            "api_key", "327155473389427",
            "api_secret", "0YbMtCd7KXttLu4_3M7UShBMqHQ"
        ));
    }
}
