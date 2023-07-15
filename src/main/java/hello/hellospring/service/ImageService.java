package hello.hellospring.service;

import hello.hellospring.common.Constants;
import hello.hellospring.common.Utils;
import hello.hellospring.entity.ImageEntity;
import hello.hellospring.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

import java.util.UUID;


@Service
public class ImageService {

    protected String upload_path;

    private final ImageRepository imageRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    // 게시글 썸 네일 이미지 삽입
    @Transactional
    public int insertThumbnail(MultipartFile multipartFile, String uploadPath) throws Exception{
        upload_path = uploadPath;
        String originalFilename = multipartFile.getOriginalFilename();
        File fileUpload = new File(upload_path);

        // 업로드 경로에 폴더가 없을 경우, 경로에 폴터 생성
        if(!fileUpload.exists()) {
            fileUpload.mkdirs();
        }

        // 파일명을 중복되지 않도록 UUID로 지정. ".확장자"는 그대로
        String fileNameInServer = UUID.randomUUID() + "." + extractExt(originalFilename);
        String fullPath = getFullPath(fileNameInServer);

        // 파일 저장 처리
        multipartFile.transferTo(new File(fullPath));
        int imageIdx = Integer.parseInt(Utils.getRandomLong(9));
        // DB 파일 관련 데이터 저장
        ImageEntity imageEntity = ImageEntity.builder()
                .imageIdx(imageIdx)
                .path(fullPath)
                .field(Constants.ACCEPT)
                .build();

        imageRepository.save(imageEntity);
        return imageIdx;
    }

    public String getFullPath(String filename) {
        return upload_path + filename;
    }

    // 확장자 추출
    private String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }
}
