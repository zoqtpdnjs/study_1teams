package hello.hellospring.repository;

import hello.hellospring.entity.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface ImageRepository extends JpaRepository<ImageEntity, String> {
    Optional<ImageEntity> findByImageIdx(int imageIdx);
}
