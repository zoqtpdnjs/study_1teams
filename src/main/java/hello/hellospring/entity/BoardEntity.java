package hello.hellospring.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="st_board")
public class BoardEntity {

    @Id
    @Column(name = "bkey")
    private String bkey;
    private String blogkey;
    private String ckey;
    private String ukey;
    private String subject;
    private String content;
    private String isnotice;
    private int imageIdx;
    private String status;
    @CreatedDate
    private Date regdate;
    @LastModifiedDate
    private Date updatedate;
    private String allowCmt;
    private int likeCnt;

    @Builder
    public BoardEntity(String bkey, String blogkey, String ckey, String ukey,
                       String subject, String content, String isnotice, int imageIdx,
                       String status, Date regdate, Date updatedate, String allowCmt, int likeCnt){
        this.bkey = bkey;
        this.blogkey = blogkey;
        this.ckey = ckey;
        this.ukey = ukey;
        this.subject = subject;
        this.content = content;
        this.isnotice = isnotice;
        this.imageIdx = imageIdx;
        this.status = status;
        this.regdate = regdate;
        this.updatedate = updatedate;
        this.allowCmt = allowCmt;
        this.likeCnt = likeCnt;
    }
}
