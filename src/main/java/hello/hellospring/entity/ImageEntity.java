package hello.hellospring.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="st_image")
public class ImageEntity {

    @Id
    @Column(name = "imageIdx")
    private int imageIdx;
    private String bkey;
    private String path;
    private String field;

    @Builder
    public ImageEntity(int imageIdx, String bkey, String path, String field){
        this.imageIdx = imageIdx;
        this.bkey = bkey;
        this.path = path;
        this.field = field;
    }

    public void update(int imageIdx, String bkey){
        this.imageIdx = imageIdx;
        this.bkey = bkey;
    }
}
