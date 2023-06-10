import {axiosInstance} from '@/lib/axiosInstance'
import {ChannelCreate, User} from "@/interfaces/interfaces";

export const getChannelById = async (channelId: number) => {
    try {
        const response = await axiosInstance.get(`/channel?channelId=${channelId}`);
        const { channel } = response.data;
        return channel;
    } catch (error) {
        console.error(`Error retrieving channel ${channelId}:`, error);
        return null;
    }
};

export const createChannel = async (channelData: ChannelCreate) => {
    try {
        const response = await axiosInstance.post('/channel', channelData);
        const { channel } = response.data;
        return channel;
    } catch (error) {
        console.error('Error creating channel:', error);
        return null;
    }
};

export const addMemberToChannel = async (channelId: string, members: Array<User>) => {
    try {
        const response = await axiosInstance.post(`/channels?channelId=${channelId}/members`, { members });
        const { channel } = response.data;
        return channel;
    } catch (error) {
        console.error(`Error adding members to channel ${channelId}:`, error);
        return null;
    }
};

export const getChannels = async () => {
    try {
        const response = await axiosInstance.get('/channels');
        const { channel } = response.data;
        return channel;
    } catch (error) {
        console.error('Error retrieving channels:', error);
        return [];
    }
};