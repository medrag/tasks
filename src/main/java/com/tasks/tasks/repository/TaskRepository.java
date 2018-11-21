package com.tasks.tasks.repository;

import com.tasks.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task,Long>
{
}
