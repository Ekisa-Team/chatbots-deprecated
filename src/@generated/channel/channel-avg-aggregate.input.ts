import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChannelAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    messagingProviderId?: true;

    @Field(() => Boolean, {nullable:true})
    chatbotId?: true;
}
