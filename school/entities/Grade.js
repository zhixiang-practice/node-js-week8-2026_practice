const {EntitySchema} = require('typeorm')

module.exports = new EntitySchema({
    name:'Grade',
    tableName:'GRADE',
    columns:{
        id:{
            type:'uuid',
            primary:true,
            generated:'uuid'
        },
        score:{
            type:'integer',
            nullable:false
        }
    },
    relations:{
        student:{
            target:'Student',
            type:'many-to-one',
            joinColumn:{name:'student_id'},
            nullable:false
        },
        subject:{
            target:'Subject',
            type:'many-to-one',
            joinColumn:{name:'subject_id'},
            nullable:false
        }
    }
})