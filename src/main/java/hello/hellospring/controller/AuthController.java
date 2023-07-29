package hello.hellospring.controller;

import hello.hellospring.domain.User;
import hello.hellospring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public String login(@ModelAttribute User user){
        if(userService.login(user)){
            System.out.println("로그인 성공");
            return "redirect:/";
        }
        System.out.println("실패");
        return "login";
    }

}
