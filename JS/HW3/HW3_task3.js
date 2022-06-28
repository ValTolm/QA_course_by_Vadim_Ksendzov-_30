// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 112,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 12,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 1120,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 21,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 11,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 2,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 1,
        },
      ]
    }
  ]
  
//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
//   **Пример:**
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

function getFormatedEmployeeLabel (dept, employeeCount, prefix ="") {
    let result;

    if (employeeCount == 0) {
        result = '(нет сотрудников)';
    } else {
        const formattedEmployeeCount = `${employeeCount}` 
        const lastDigital = +formattedEmployeeCount.at(-1)
        const nextToLastDigital = +formattedEmployeeCount.at(-2)
        const arr = [2,3,4]

        if (
            (arr.includes(lastDigital) && !nextToLastDigital ) ||
            (arr.includes(lastDigital) && (nextToLastDigital != "1")) 
        ) {
            result = ` (${employeeCount} сотрудника)`
        } else if ((lastDigital == "1") && (nextToLastDigital != "1")) {
            result = ` (${employeeCount} сотрудник)`
        } else {
            result = ` (${employeeCount} сотрудников)`
        }
    }
    return prefix + dept.name + result;    
}

enterprises.map(department => {
    console.log(getFormatedEmployeeLabel(
        department,
        department.departments.reduce((a, b) => a + b.employees_count, 0)
    ))

    department.departments.map(department =>
        console.log(getFormatedEmployeeLabel(
            department,
            department.employees_count, 
            "- "
    ))
    )
})
                    
//   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится). 
//   Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName (departmentIdOrName) {
    let enterpriseName =[] ;
    enterprises.map( (company) => company.departments.forEach( function (value, i) {
        if (value.id == departmentIdOrName || value.name == departmentIdOrName) {
            enterpriseName.push(company.name)
        }
    } ) )
    return enterpriseName;
}

console.log ( getEnterpriseName(4) );  // Предприятие 1
console.log ( getEnterpriseName("Отдел маркетинга") )// [ 'Предприятие 1', 'Предприятие 2' ]

//   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
//   Пример:
//   addEnterprise("Название нового предприятия")

function findNextId(enterprises) {
    let arrayOfIds = [];
    enterprises.map( company => arrayOfIds.push(company.id));
    enterprises.map( function (company) {
        if (company.departments) {
            company.departments.filter( function (department) {
                arrayOfIds.push(department.id)
            })
        }
    })
    let nextId = Math.max(...arrayOfIds) + 1
    return nextId;
}

function addEnterprise(newEnterprise){
    enterprises.push({id : findNextId(enterprises), name : newEnterprise})
}

addEnterprise("Название нового предприятия")
console.log(enterprises)

//   4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, 
// в которое будет добавлен отдел и название отдела.
//   Пример:
//   addDepartment(1, "Название нового отдела")

function addDepartment ( enterpriseId, newDepartmentName) {
    enterprises.map(function (enterprise) {
        if (enterprise.id == enterpriseId) {
            enterprise.departments.push({id : findNextId(enterprises), name : newDepartmentName})
        }
    } )

}
addDepartment(1, "Название нового отдела")
console.log(enterprises)
  
//   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
//   Пример:
//   editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, newName ){
    enterprises.map( function (enterprise) {
        if( enterprise.id === id){
            enterprise.name = newName;
        }
    })
}
  
editEnterprise(1, "Новое название предприятия");
console.log(enterprises);
 
//   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
//   Пример:
//   editDepartment(7, "Новое название отдела")

function editDepartment ( deptId, newDepartmentName) {
    enterprises.map(function (company) {
        if (company.departments){
            company.departments.map( function (dept) {
                if (dept.id == deptId){
                    dept.name = newDepartmentName
                }
            })
        }
    })
} ;

editDepartment(7, "Новое название отдела");
console.log(enterprises);
  
//   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
//   Пример:
//   deleteEnterprise(1)

function deleteEnterprise (companyId){
    var index = enterprises.findIndex( company => company.id === companyId);
    enterprises.splice(index, 1);
};

deleteEnterprise(1);
console.log(enterprises)

//   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
//   Пример:
//   deleteDepartment(3)

function deleteDepartment (deptId) {
    enterprises.map (function (company) {
        if (company.departments) {
            var index = company.departments.findIndex( function (dept) { return dept.id === deptId})
            if(index >= 0){
                company.departments.splice(index, 1);
            }            
        }
    })
}
deleteDepartment(6);
console.log(enterprises);

//   9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
//   Пример:
//   moveEmployees(2, 3) 

function moveEmployees( fromDeptId, toDeptId ) {
    enterprises.map (function (company) {
        if (company.departments) {
            var indexFromDeptID = company.departments.findIndex( function (dept) { return dept.id === fromDeptId})
            var indexToDeptID = company.departments.findIndex( function (dept) { return dept.id === toDeptId})
            if(indexFromDeptID >= 0 && indexToDeptID >=0){

                company.departments[indexToDeptID].employees_count += company.departments[indexFromDeptID].employees_count
                company.departments[indexFromDeptID].employees_count = 0
            } 
        }           
    })        
}
moveEmployees(7, 8)
console.log(enterprises)
