package hello.hellospring.controller;

import hello.hellospring.common.Constants;
import hello.hellospring.domain.Board;
import hello.hellospring.exception.CommonException;
import hello.hellospring.service.BoardService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;


    // 게시글 전체 리스트
    @GetMapping("/list")
    public List<Board> list(){
        return boardService.getBoardList();
    }

    // 게시글 작성
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public String insertBoard(@RequestBody Board board){
        JSONObject json = new JSONObject();
        int result = Constants.INSERT_FAILURE;
        try {
            boardService.insertBoard(board);
            result = Constants.INSERT_SUCCESS;
        } catch (CommonException e){
            json.put("error", e.getErrorCode());
        } catch (Exception e){
            json.put("error", e.toString());
        }
        json.put("result", result);

        return json.toString();
    }
}
