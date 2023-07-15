package hello.hellospring.service;

import hello.hellospring.domain.User;
import hello.hellospring.entity.UserEntity;
import hello.hellospring.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;

    @Transactional
    public void insertUser(User user){
        UserEntity userEntity = new UserEntity();
        userEntity.setUkey(user.getUkey());
        userEntity.setAccount(user.getAccount());
        userEntity.setPasswd(user.getPasswd());
        userEntity.setName(user.getName());
        userEntity.setAuth(user.getAuth());
        userEntity.setEmail(user.getEmail());
        userEntity.setBlog_url(user.getBlog_url());
        userEntity.setNickname(user.getNickname());
        userEntity.setStatus(user.getStatus());
        userEntity.setHandphone(user.getHandphone());
        userEntity.setBirth(user.getBirth());

        userRepository.save(userEntity);
    }

    @Transactional
    public List<User> getUserList(){
        List<UserEntity> userEntityList = userRepository.findAll();
        List<User> userList = userEntityList.stream()
                .map(m -> new User(
                        m.getUkey(),m.getAccount(),m.getPasswd(),m.getName(),
                        m.getAuth(),m.getRegdate(),m.getEmail(),m.getBlog_url(),
                        m.getNickname(),m.getStatus(),m.getHandphone(),m.getBirth()
                ))
                .collect(Collectors.toList());

        return userList;
    }

    @Transactional
       public boolean checkId(String account) {
        return userRepository.existsByAccount(account);
    }

}
