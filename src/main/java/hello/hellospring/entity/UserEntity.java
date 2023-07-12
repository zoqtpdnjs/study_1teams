package hello.hellospring.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name="st_account")
public class UserEntity {

    @Id
    @Column(name = "ukey")
    private String ukey;
    private String account;
    private String passwd;
    private String name;
    private int auth;
    @CreatedDate
    private Date regdate;
    private String email;
    private String blog_url;
    private String nickname;
    private int status;
    private String handphone;
    private String birth;
}
