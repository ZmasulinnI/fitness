const organization = {
        organizationId : 0,
        organizationName : "GelikFit",
        ownerId : 0,
        address : "Россия, Мурманская обл, г Кандалакша, ул Первомайская, д 85А",
        phoneOrganization : "+7 (900) 200-00-15",
        description : "Позволь себе гибкое и здоровое тело!",
        logo : "ссылка на лого",

        added : "время"
    }

export const user = {
    UserId : 0,
    UserName : "Ангелина",
    userType : "owner"
}

export const trainers = [ // Тренера только организации GelikFit
    {   
        organizationID : 0,
        trainerId : 0,
        fullName : "Ангелина Иванова", 
        phone : "+7 (900) 200-00-15",
        photo : "ссылка на фотку",
        description : "Весь сентябрь, скидка 15% на индивидуальные абонементы!",

        position : "Тренер индивидуальных программ",
        birthday : "11.11.1111",

        added : "время"
    },
    {   
        organizationID : 0,
        trainerId : 1,
        fullName : "Александра Мирная", 
        phone : "+7 (911) 210-02-13",
        photo : "ссылка на фотку",
        description : "Пробное групповое занятие за 300 рублей!",

        position : "Тренер групповых программ",
        birthday : "11.11.1111",

        added : "время"
    },
    {   
        organizationID : 0,
        trainerId : 2,
        fullName : "Юлька Забивная", 
        phone : "+7 (911) 210-02-13",
        photo : "ссылка на фотку",
        description : "Почувствуй свое тело с новой программой YogaStart!",

        position : "Мастер по йоге",
        birthday : "11.11.1111",

        added : "время"
    }
]

export const schedule11 = [ // рассписание на конкретный день (11.09.2023)
    {
        organizationID : 0,
        workoutID : 0,
        trainerId : 0,
        datetimeStart : 1694433600, // Unix дата-время начала тренировки (11.09.2023 12:00)
        datetimeEnd : 1694437200, // Unix дата-время окончания (11.09.2023 13:00)
        
        workoutName : "Индивидуальная тренировка",
        workoutTypeID : 0,
        icon : "иконка",
        color : "#023ED9", // хз как цвет хранить

        membersCount : 1,
        slotsCount : 1
    }, 
    {
        organizationID : 0,
        workoutID : 1,
        trainerId : 1,
        datetimeStart : 1694437200, // (11.09.2023 13:00)
        datetimeEnd : 1694440800, // (11.09.2023 14:00)
        
        workoutName : "Растяжка",
        workoutTypeID : 1,
        icon : "иконка",
        color : "#023ED9",

        membersCount : 2,
        slotsCount : 6
    },
    {
        organizationID : 0,
        workoutID : 2,
        trainerId : 2,
        datetimeStart : 1710190584, // (11.09.2023 18:00)
        datetimeEnd : 1694458800, // (11.09.2023 19:00)
        
        workoutName : "Йога",
        workoutTypeID : 2,
        icon : "иконка",
        color : "#023ED9", 

        membersCount : 4,
        slotsCount : 5
    }
]

const schedule12 = [ // рассписание на конкретный день (12.09.2023)
    {
        organizationID : 0,
        workoutID : 3,
        trainerId : 1,
        datetimeStart : 1694530800, // (12.09.2023 15:00)
        datetimeEnd : 1694534400, // (12.09.2023 16:00)
        
        workoutName : "Растяжка",
        workoutTypeID : 1,
        icon : "иконка",
        color : "#023ED9",

        membersCount : 2,
        slotsCount : 6
    },
    {
        organizationID : 0,
        workoutID : 4,
        trainerId : 2,
        datetimeStart : 1694541600, // (12.09.2023 18:00)
        datetimeEnd : 1694545200, // (12.09.2023 19:00)
        
        workoutName : "Йога",
        workoutTypeID : 2,
        icon : "иконка",
        color : "#023ED9", 

        membersCount : 4,
        slotsCount : 5
    }
]