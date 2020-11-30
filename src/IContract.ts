import { IPersonIdentifier, IPersonDetail } from './dto/person';

export default interface IContract {
	Get(personIdentifier: IPersonIdentifier): IPersonDetail;
	Create(personDetail: IPersonDetail): IPersonDetail;
	Delete(personIdentifier: IPersonIdentifier): IPersonDetail;
}
