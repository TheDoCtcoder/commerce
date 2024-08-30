import {faker} from '@faker-js/faker';
function createRandomeCarList(){
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        
        image:'https://hips.hearstapps.com/hmg-prod/images/2024-tesla-cybertruck-115-65e8945de87ba.jpg?crop=0.684xw:0.576xh;0.106xw,0.391xh&resize=2048:*',
        // image:'https://www.usnews.com/object/image/0000018f-cfa8-d140-afdf-dfea657d0001/24-bmw-530i-ext1.jpg?update-time=1717175974506&size=responsiveGallery',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    };
}

const carList=faker.helpers.multiple(createRandomeCarList,{
    count:7
})

export default{
    carList
}