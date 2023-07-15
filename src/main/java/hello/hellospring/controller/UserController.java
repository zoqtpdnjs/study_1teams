package hello.hellospring.controller;

import hello.hellospring.domain.User;
import hello.hellospring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/addUser")
    public void saveUser(User user){
        userService.insertUser(user);
    }

    @GetMapping("/getAllUser")
    public List<User> getUser(){
        return userService.getUserList();
    }
    @GetMapping("/checkId")
    public boolean checkId(String account){
        return userService.checkId(account);
    }
}
