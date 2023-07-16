package hello.hellospring.service;

import hello.hellospring.common.Utils;
import hello.hellospring.domain.Board;
import hello.hellospring.entity.BoardEntity;
import hello.hellospring.entity.ImageEntity;
import hello.hellospring.exception.CommonException;
import hello.hellospring.repository.BoardRepository;
import hello.hellospring.repository.ImageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BoardService {
    private BoardRepository boardRepository;
    private ImageRepository imageRepository;

    // 게시글 전체 리스트
    @Transactional
    public List<Board> getBoardList(){
        List<BoardEntity> boardEntityList = boardRepository.findAll();
        List<Board> boardList = boardEntityList.stream()
                .map(m -> new Board(
                        m.getBkey(),m.getBlogkey(),m.getCkey(),m.getUkey(),
                        m.getSubject(),m.getContent(),m.getIsnotice(),
                        m.getImageIdx(),m.getStatus(), null, null,
                        m.getAllowCmt(),m.getLikeCnt()
                ))
                .collect(Collectors.toList());

        return boardList;
    }

    // 게시글 작성
    @Transactional
    public void insertBoard(Board board) throws Exception{
        if(board == null){
            throw new CommonException(CommonException.NO_REQUIRED_DTO);
        }

        board.setBkey(Utils.makeKey(24));

        BoardEntity boardEntity = boardToBoardEntity(board);
        boardRepository.save(boardEntity);

        if(board.getImageIdx() != 0){
            // 이미지에 bkey 추가
            Optional<ImageEntity> imageEntity = imageRepository.findByImageIdx(board.getImageIdx());
            imageEntity.ifPresent(
                    get -> {
                        get.update(board.getImageIdx(), board.getBkey());
                    }
            );
        }
    }

    // Board -> BoardEntity
    public BoardEntity boardToBoardEntity(Board board){
        BoardEntity boardEntity = BoardEntity.builder()
                .bkey(board.getBkey())
                .blogkey(board.getBlogkey())
                .ckey(board.getCkey())
                .ukey(board.getUkey())
                .subject(board.getSubject())
                .content(board.getContent())
                .isnotice(board.getIsnotice())
                .imageIdx(board.getImageIdx())
                .status(board.getStatus())
                .regdate(board.getRegdate())
                .updatedate(board.getUpdatedate())
                .allowCmt(board.getAllowCmt())
                .likeCnt(board.getLikeCnt())
                .build();
        return boardEntity;
    }

    // BoardEntity -> Board
    public Board boardEntityToBoard(BoardEntity boardEntity){
        Board board = Board.builder()
                .bkey(boardEntity.getBkey())
                .blogkey(boardEntity.getBlogkey())
                .ckey(boardEntity.getCkey())
                .ukey(boardEntity.getUkey())
                .subject(boardEntity.getSubject())
                .content(boardEntity.getContent())
                .isnotice(boardEntity.getIsnotice())
                .imageIdx(boardEntity.getImageIdx())
                .status(boardEntity.getStatus())
                .regdate(boardEntity.getRegdate())
                .updatedate(boardEntity.getUpdatedate())
                .allowCmt(boardEntity.getAllowCmt())
                .likeCnt(boardEntity.getLikeCnt())
                .build();
        return board;
    }

}
