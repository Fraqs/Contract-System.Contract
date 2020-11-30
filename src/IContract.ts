import { IPersonIdentifier, IPersonDetail } from './dto/person';

export default interface IContract {
	Get(personIdentifier: IPersonIdentifier): Promise<IPersonDetail>;
	Create(personDetail: IPersonDetail): Promise<IPersonDetail>;
	Delete(personIdentifier: IPersonIdentifier): Promise<IPersonDetail>;
}
