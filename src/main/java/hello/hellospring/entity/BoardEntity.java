package hello.hellospring.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
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

}
