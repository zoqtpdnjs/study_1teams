package hello.hellospring.repository;

import hello.hellospring.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    boolean existsByAccount(String account);
}
