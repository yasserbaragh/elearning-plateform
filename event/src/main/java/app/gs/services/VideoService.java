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

   
    private String extractPublicIdFromUrl(String url) {
        // Cloudinary video URLs are typically like:
        // https://res.cloudinary.com/<cloud_name>/video/upload/v<version>/<public_id>.mp4

        // Remove the prefix up to /upload/:
        String[] parts = url.split("/upload/");
        if (parts.length < 2) return null;

        // Remove extension (e.g. .mp4) from the filename:
        String pathWithoutExt = parts[1].replaceAll("\\.mp4$", "");
        return pathWithoutExt;
    }
    

public boolean deleteVideo(Long id) {
    return videoRepo.findById(id).map(video -> {
        try {
            // Assuming your Video entity has a getUrl() or similar
            String videoUrl = video.getUrl(); // e.g. https://res.cloudinary.com/.../video/upload/v1234567890/your_video.mp4

            // Extract public ID from URL (you might store it directly instead for easier access)
            String publicId = extractPublicIdFromUrl(videoUrl);

            // Delete from Cloudinary
            cloudinary.uploader().destroy(publicId, ObjectUtils.asMap("resource_type", "video"));

            // Delete from DB
            videoRepo.deleteById(id);
            return true;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }).orElse(false);
}

}
