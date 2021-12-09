export type SendSuggestionClassDataType = {
    ownerId: number
    ownerName: string
    ownerNumber: string
    petId: number
    petName: string
    petNumber: string
    ownerPhoneNumber: string
}

export class SendSuggestionClass {
    private _ownerId: number
    private _ownerName: string
    private _ownerNumber: string
    private _petId: number
    private _petName: string
    private _petNumber: string
    private _ownerPhoneNumber: string


    constructor(data: SendSuggestionClassDataType) {
        this._ownerId = data.ownerId
        this._ownerName = data.ownerName
        this._ownerNumber = data.ownerNumber
        this._petId = data.petId
        this._petName = data.petName
        this._petNumber = data.petNumber
        this._ownerPhoneNumber = data.ownerPhoneNumber
    }

    get ownerId(): number {
        return this._ownerId;
    }
    get ownerName(): string {
        return this._ownerName;
    }
    get petId(): number {
        return this._petId;
    }
    get petName(): string {
        return this._petName;
    }
    get ownerPhoneNumber(): string {
        return this._ownerPhoneNumber;
    }

    get ownerNumber(): string {
        return this._ownerNumber;
    }
    get petNumber(): string {
        return this._petNumber;
    }
}