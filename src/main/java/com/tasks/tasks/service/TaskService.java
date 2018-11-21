package com.tasks.tasks.service;

import com.tasks.tasks.domain.Task;

public interface TaskService
{
    Iterable<Task> list();
    Task save(Task task);
    void delete(Task task);
}
