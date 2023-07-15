package hello.hellospring.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class Image {
    private String imageIdx;
    private String bkey;
    private String path;
    private String field;

    @Builder
    public Image(String imageIdx, String bkey, String path, String field){
        this.imageIdx = imageIdx;
        this.bkey = bkey;
        this.path = path;
        this.field = field;
    }
}
