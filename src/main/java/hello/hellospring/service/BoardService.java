package hello.hellospring.service;

import hello.hellospring.domain.Board;
import hello.hellospring.entity.BoardEntity;
import hello.hellospring.repository.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BoardService {
    private BoardRepository boardRepository;

    @Transactional
    public List<Board> getBoardList(){
        List<BoardEntity> boardEntityList = boardRepository.findAll();
        List<Board> boardList = boardEntityList.stream()
                .map(m -> new Board(
                        m.getBkey(),m.getBlogkey(),m.getCkey(),m.getUkey(),
                        m.getSubject(),m.getContent(),m.getIsnotice(),
                        m.getImageIdx(),m.getStatus(),m.getAllowCmt(),m.getLikeCnt()
                ))
                .collect(Collectors.toList());

        return boardList;
    }

}
