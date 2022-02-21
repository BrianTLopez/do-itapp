import React, { useEffect, useState } from 'react';
import TaskHeader from './TaskHeader'
import axios from 'axios';
import Form from '../task-components/Form'


const TaskListArea = (project, layoutType) => {
    const [data, setData] = useState(null);

    const setTodos = (newTodo, projectId) => {
        setData(projects => {
            // projects.forEach(v => {
            //     console.log('------');
            //     console.log(v.id);
            //     const someId = v.id;
            //     console.log(typeof someId);
            //     console.log('######');
            // })
  

            const projectIdx = projects.find(v => v.id === projectId);
            console.log('-----:D',projectIdx.id);
            if (projectIdx) {
                return;
            }

            const projectClone = projects;
            projectClone[projectIdx] = {
                ...projects[projectIdx],
                tasks: newTodo
            }
          console.log('projectClone', projectClone)
        })
      }

    useEffect(() => {
        async function fetchData() {
            axios
                .get("/api/v1/projects/allProjects")
                .then(function (response) {
                    const projects = response.data
                    setData(projects);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        fetchData();
    },[])
    console.log(data);

    return (
        <div className="TaskList-area">
            <TaskHeader />
            <div className='taskArea'>
            {!!data && (
                <>
                    {data.map(project =>{
                        return <div className='taskCard'>
                                <h2 className="listName">{project.name}</h2>
                                <Form 
                                   data={project.tasks}
                                   setData={setData}
                                   setTodos = {setTodos}
                                   projId = {project.id}
                                />
                                </div>
                    })}
                </>
            )}

            </div>
        
        </div>
    )
}

export default TaskListArea;
