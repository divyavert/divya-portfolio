export default{
    name: 'testimonial',
    title: 'Testimonal',
    type: 'document',
    fields:[
    {
        name:'name',
        title:'Name',
        type: 'string'
    },
    {
        name:'company',
        title:'Company',
        type: 'string'
    },    
    {
        name:'imgurl',
        title:'ImgUrl',
        type: 'image',
        option: {
                hotspot:true,
                },
    }, 
    {
        name:'feedback',
        title:'Feedback',
        type: 'string'
    }
    ]
}