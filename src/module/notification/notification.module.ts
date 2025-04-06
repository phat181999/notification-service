import { forwardRef, Module } from "@nestjs/common";
import { PrismaModule } from "prisma/prisma.module";
import { NotificationResolver } from "./resolver/notification.resolver";
import { NotificationService } from "./service/notification.service";

@Module({
    imports: [
        forwardRef(() => PrismaModule)
    ],
    controllers: [],
    providers: [NotificationService, NotificationResolver],
    exports: [],
})

export class NotificationModule {}