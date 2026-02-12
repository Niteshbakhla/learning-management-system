import asyncHandler from "../utils/asyncHandler.js";

import {
    getAllUsersService,
    toggleBlockUserService,
    getAllCoursesService,
    unpublishCourseService,
    getPlatformStatsService,
} from "../services/admin.service.js";


// 👤 USERS

export const getAllUsers = asyncHandler(
    async (req, res) => {
        const users = await getAllUsersService(req.dbUser._id);

        res.status(200).json({
            success: true,
            users,
        });
    }
);


export const toggleBlockUser = asyncHandler(
    async (req, res) => {
        const result =
            await toggleBlockUserService(req.params.id);

        res.status(200).json(result);
    }
);



// 📚 COURSES

export const getAllCourses = asyncHandler(
    async (req, res) => {
        const courses =
            await getAllCoursesService();

        res.status(200).json({
            success: true,
            courses,
        });
    }
);


export const unpublishCourse = asyncHandler(
    async (req, res) => {
        const result =
            await unpublishCourseService(req.params.id);

        res.status(200).json(result);
    }
);



// 📊 STATS

export const getPlatformStats = asyncHandler(
    async (req, res) => {
        const stats =
            await getPlatformStatsService();

        res.status(200).json({
            success: true,
            stats,
        });
    }
);
