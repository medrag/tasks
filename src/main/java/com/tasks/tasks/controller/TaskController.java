package com.tasks.tasks.controller;


import com.tasks.tasks.domain.Task;
import com.tasks.tasks.service.TaskService;
import org.springframework.web.bind.annotation.*;
import sun.awt.SunHints;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {


    private TaskService taskService;

    public TaskController(TaskService taskService)
    {
       this.taskService = taskService;
    }

    @GetMapping(value= {"","/"})
    public Iterable<Task> list()
    {
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task)
    {
        return this.taskService.save(task);
    }

    @PostMapping("/delete")
    public void deleteTask(@RequestBody Task task) { this.taskService.delete(task); }
}
