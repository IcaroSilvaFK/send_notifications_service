import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
