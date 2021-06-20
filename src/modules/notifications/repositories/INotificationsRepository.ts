import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface NotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
