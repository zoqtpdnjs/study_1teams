package hello.hellospring.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
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
    private Date regdate;
    private Date updatedate;
    private String allowCmt;
    private int likeCnt;

    @Builder
    public Board(String bkey, String blogkey, String ckey, String ukey,
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
