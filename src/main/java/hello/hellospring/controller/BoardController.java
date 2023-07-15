package hello.hellospring.controller;

import hello.hellospring.domain.Board;
import hello.hellospring.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;


    // 게시판 리스트
    @GetMapping("/list")
    public List<Board> list(){
        return boardService.getBoardList();
    }

}
