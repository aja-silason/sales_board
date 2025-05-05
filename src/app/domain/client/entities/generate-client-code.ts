export class GenerateClientCode {

    constructor(private readonly telefone: string){}

    public static create(telefone: string){

        return this.generateClientCode(telefone);

    }

    private static generateClientCode(props: string){

        const telephoneNumber = props.split('');
        const ArraytreTelephoneNumber: Array<any> = [];
        
        for (let _i: number = telephoneNumber.length - 3; _i < telephoneNumber.length; _i++ ){
            ArraytreTelephoneNumber.push(telephoneNumber[_i])
        }

        const telephone = ArraytreTelephoneNumber.reverse().join('');
        const firstTimeValue = new Date().toJSON().split('.')[1].split('Z')[0]
        const secondTimeValue = new Date().toJSON().split(':')[2].split('.')[0]

        const tamplate = `${telephone}-${firstTimeValue}-${secondTimeValue}`

        return tamplate;

    }

}