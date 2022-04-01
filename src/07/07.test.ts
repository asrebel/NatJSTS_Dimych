import {ManType2} from "./Destructuring";

let props: ManType2;
beforeEach(() => {
    props = {
        name: 'Alexander',
        age: 34,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: '32 mkrn'
            }
        }
    }
})

test ('', () => {


    const {age, lessons} = props
    const {title} = props.address.street

    const a = age
    const l = lessons

    expect(age).toBe(34)
    expect(lessons.length).toBe(3)

    expect(a).toBe(34)
    expect(l.length).toBe(3)
    expect(title).toBe('32 mkrn')

})


test('123', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')


    expect(ls1.title).toBe('1')
    //expect(ls2.title).toBe('2')

    expect(restLessons[0].title).toBe('2')
    expect(restLessons.length).toBe(2)
})