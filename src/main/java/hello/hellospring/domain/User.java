package hello.hellospring.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String ukey;
    private String account;
    private String passwd;
    private String name;
    private int auth;
    private Date regdate;
    private String email;
    private String blog_url;
    private String nickname;
    private int status;
    private String handphone;
    private String birth;
}
