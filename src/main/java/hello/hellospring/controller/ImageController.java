package hello.hellospring.controller;

import hello.hellospring.common.Constants;
import hello.hellospring.exception.CommonException;
import hello.hellospring.service.ImageService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/image")
public class ImageController {

    @Value("${upload-path}")
    private String uploadPath;

    @Autowired
    private ImageService imageService;

    // 게시글 썸네일 이미지 삽입
    @RequestMapping(value = "/insertThumbnail", method = RequestMethod.POST)
    public String insertThumbnail(@RequestPart(value = "file", required = false) MultipartFile multipartFile){
        JSONObject json = new JSONObject();
        int result = Constants.INSERT_FAILURE;

        if(multipartFile.isEmpty()) {
            json.put("error", CommonException.NO_REQUIRED_DTO);
            return json.toString();
        }

        try {
            json.put("imgIndex", imageService.insertThumbnail(multipartFile, uploadPath));
            result = Constants.INSERT_SUCCESS;
        } catch (Exception e){
            json.put("error", e.toString());
        }
        json.put("result", result);

        return json.toString();
    }

}
