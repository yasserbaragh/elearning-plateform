package app.gs.services;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import app.gs.entites.Video;
import app.gs.repositories.VideoRepository;
import io.jsonwebtoken.io.IOException;
import java.util.Map;

import com.cloudinary.utils.ObjectUtils;


@Service
public class VideoService {

    private final Cloudinary cloudinary;
    private final VideoRepository videoRepo;

    public VideoService(Cloudinary cloudinary, VideoRepository videoRepo) {
        this.cloudinary = cloudinary;
        this.videoRepo = videoRepo;
    }

    public Video uploadVideo(MultipartFile file, String title) {
        try {
        	Map<String, Object> uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap(
                    "resource_type", "video"
                ));
        	System.out.println("File name: " + file.getOriginalFilename());
        	System.out.println("Title: " + title);
        	System.out.println("Is empty: " + file.isEmpty());
        	 Video video = new Video();
             video.setTitle(title);
             video.setUrl((String) uploadResult.get("secure_url"));
             video.setPublicId((String) uploadResult.get("public_id"));
             System.out.println("Upload result: " + uploadResult);

             return videoRepo.save(video);
        } catch(Exception e) {
        	System.out.println(e.getMessage());
        	return null;
        }

       
    }


    public List<Video> getAllVideos() {
        return videoRepo.findAll();
    }
}
