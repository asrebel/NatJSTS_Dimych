const ages = [18,20,22,1,100,90,14];

const oldAges = ages.filter(age => age >90); // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price:110},
    {title: 'js', price:200},
    {title: 'react', price:150}
]

// < 160

const cheapCourses = courses.filter(course => course.price < 160);


