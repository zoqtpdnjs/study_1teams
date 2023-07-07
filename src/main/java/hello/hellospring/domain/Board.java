package hello.hellospring.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Board {
    private String bkey;
    private String blogkey;
    private String ckey;
    private String ukey;
    private String subject;
    private String content;
    private String isnotice;
    private int imageIdx;
    private String status;
    private String allowCmt;
    private int likeCnt;
}
