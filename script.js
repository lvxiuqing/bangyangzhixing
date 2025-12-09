// 印章数据
const stampsData = [
    { id: 1, name: "认真书写，所有作业、笔记，做到规范书写", category: "study", icon: "fa-book", description: "认真书写，所有作业、笔记，做到规范书写" },
    { id: 2, name: "能够按时完成老师所布置的作业、任务", category: "study", icon: "fa-comments", description: "能够按时完成老师所布置的作业、任务" },
    { id: 3, name: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本", category: "study", icon: "fa-book-open", description: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本" },
    { id: 4, name: "课上有意识的专注听讲，积极发言", category: "study", icon: "fa-graduation-cap", description: "课上有意识的专注听讲，积极发言" },
    { id: 20, name: "文明如厕不随地吐痰，不乱扔垃圾", category: "behavior", icon: "fa-handshake", description: "文明如厕不随地吐痰，不乱扔垃圾" },
    { id: 5, name: "不在桌椅、教室、图书上乱涂乱画", category: "behavior", icon: "fa-certificate", description: "不在桌椅、教室、图书上乱涂乱画" },
    { id: 6, name: "不破坏学校的公共设施、设备", category: "behavior", icon: "fa-heart", description: "不破坏学校的公共设施、设备" },
    { id: 7, name: "积进入校园后，按照路线行走，不推不挤，不跑", category: "teamwork", icon: "fa-users", description: "积进入校园后，按照路线行走，不推不挤，不跑" },
    { id: 8, name: "进入教学楼后靠右行走，不追逐打闹", category: "teamwork", icon: "fa-hands-helping", description: "进入教学楼后靠右行走，不追逐打闹" },
    { id: 9, name: "尽量不迟到，迟到要从前门喊报告", category: "teamwork", icon: "fa-people-arrows", description: "尽量不迟到，迟到要从前门喊报告" },
    { id: 10, name: "任何时间不和同学打闹，不欺负、欺凌同学", category: "teamwork", icon: "fa-comments", description: "任何时间不和同学打闹，不欺负、欺凌同学" },
    { id: 11, name: "作为值日生认真完成当天的值日活动，保持教室的干净整洁", category: "responsibility", icon: "fa-shield-alt", description: "作为值日生认真完成当天的值日活动，保持教室的干净整洁" },
    { id: 12, name: "能够及时清理自己的书包、书桌等，保持好个人卫生", category: "responsibility", icon: "fa-check-circle", description: "能够及时清理自己的书包、书桌等，保持好个人卫生" },
    { id: 13, name: "日常和同学友好相处，不排挤欺负同学", category: "unity", icon: "fa-people-arrows", description: "日常和同学友好相处，不排挤欺负同学" },
    { id: 14, name: "积极参与完成小组活动和任务", category: "unity", icon: "fa-flag", description: "积极参与完成小组活动和任务" },
    { id: 15, name: "未完成作业时勇敢承认，不找任何理由", category: "honesty", icon: "fa-certificate", description: "未完成作业时勇敢承认，不找任何理由" },
    { id: 16, name: "对待考试，自己独立完成，不要抄袭别人的", category: "honesty", icon: "fa-balance-scale", description: "对待考试，自己独立完成，不要抄袭别人的" },
    { id: 17, name: "出现问题时，思考自己的错误", category: "honesty", icon: "fa-hand-holding-usd", description: "出现问题时，思考自己的错误" },
    { id: 18, name: "养坚持好晨读、午练、晚阅读", category: "habit", icon: "fa-check-circle", description: "养坚持好晨读、午练、晚阅读" },
    { id: 19, name: "自己的事情自己做，例如自己整理书包、自己记作业", category: "habit", icon: "fa-star", description: "自己的事情自己做，例如自己整理书包、自己记作业" }
];

// 二年级学生印章数据
const grade2StampsData = [
    { id: 101, name: "认真书写，所有作业、笔记，做到规范书写", category: "study", icon: "fa-book", description: "认真书写，所有作业、笔记，做到规范书写" },
    { id: 102, name: "能够按时完成老师所布置的作业、任务", category: "study", icon: "fa-pencil-alt", description: "能够按时完成老师所布置的作业、任务" },
    { id: 103, name: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本", category: "study", icon: "fa-brain", description: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本" },
    { id: 104, name: "课堂上相对长时间专注听讲，积极发言", category: "study", icon: "fa-tasks", description: "课堂上相对长时间专注听讲，积极发言" },
    { id: 105, name: "遇到不会解决的问题，不放弃，反复思考，或请教他人", category: "study", icon: "fa-clock", description: "遇到不会解决的问题，不放弃，反复思考，或请教他人" },
    { id: 106, name: "文明如厕，不随地吐痰，不乱扔垃圾", category: "behavior", icon: "fa-leaf", description: "文明如厕，不随地吐痰，不乱扔垃圾" },
    { id: 107, name: "不在桌椅、教室、图书上乱涂乱画", category: "behavior", icon: "fa-hands-helping", description: "不在桌椅、教室、图书上乱涂乱画" },
    { id: 200, name: "不破坏学校的公共设施、设备", category: "behavior", icon: "fa-volume-down", description: "不破坏学校的公共设施、设备" },
    { id: 108, name: "不讲脏话，不做任何不文明的手势动作", category: "behavior", icon: "fa-shield-alt", description: "不讲脏话，不做任何不文明的手势动作" },
    { id: 109, name: "不给老师、同学起绰号", category: "behavior", icon: "fa-shield-alt", description: "不给老师、同学起绰号" },
    { id: 201, name: "进入校园后，按照路线行走，不推不挤，不跑", category: "teamwork", icon: "fa-users", description: "进入校园后，按照路线行走，不推不挤，不跑" },
    { id: 110, name: "进入教学楼后靠右行走，不追逐打闹", category: "teamwork", icon: "fa-flag", description: "进入教学楼后靠右行走，不追逐打闹" },
    { id: 111, name: "尽量不迟到，迟到要从前门喊报告", category: "teamwork", icon: "fa-gavel", description: "尽量不迟到，迟到要从前门喊报告" },
    { id: 112, name: "任何时间不和同学打闹，不欺负、欺凌同学", category: "teamwork", icon: "fa-sort-amount-up", description: "任何时间不和同学打闹，不欺负、欺凌同学" },
    { id: 113, name: "进入教室后，保持安静，快速进入读书、写字等学习状态", category: "teamwork", icon: "fa-clock", description: "进入教室后，保持安静，快速进入读书、写字等学习状态" },
    { id: 202, name: "作为值日生认真完成当天的值日活动，保持教室的干净整洁", category: "responsibility", icon: "fa-broom", description: "作为值日生认真完成当天的值日活动，保持教室的干净整洁" },
    { id: 114, name: "能够及时清理自己的书包、书桌等，保持好个人卫生", category: "responsibility", icon: "fa-lock", description: "能够及时清理自己的书包、书桌等，保持好个人卫生" },
    { id: 115, name: "在家能够帮助父母做一些力所能及的事", category: "responsibility", icon: "fa-clock", description: "在家能够帮助父母做一些力所能及的事" },
    { id: 117, name: "日常和同学友好相处，不排挤欺负同学", category: "unity", icon: "fa-handshake", description: "日常和同学友好相处，不排挤欺负同学" },
    { id: 118, name: "在团体小组活动中，能够积极参与、认真听取别人的意见，分工协作，共同完成", category: "unity", icon: "fa-share-alt", description: "在团体小组活动中，能够积极参与、认真听取别人的意见，分工协作，共同完成" },
    { id: 119, name: "未完成作业时勇敢承认，不找任何理由", category: "honesty", icon: "fa-certificate", description: "未完成作业时勇敢承认，不找任何理由" },
    { id: 120, name: "对待考试，自己独立完成，不要抄袭别人的", category: "honesty", icon: "fa-heart", description: "对待考试，自己独立完成，不要抄袭别人的" },
    { id: 121, name: "出现问题时，不逃避自己的责任，不把问题都推到别人身上，直视自己的错误", category: "honesty", icon: "fa-balance-scale", description: "出现问题时，不逃避自己的责任，不把问题都推到别人身上，直视自己的错误" },
    { id: 122, name: "坚持好晨读、午练、晚阅读", category: "habit", icon: "fa-bed", description: "坚持好晨读、午练、晚阅读" },
    { id: 123, name: "自己的事情自己做，例如自己整理书包、自己记作业", category: "habit", icon: "fa-running", description: "自己的事情自己做，例如自己整理书包、自己记作业" },
    { id: 124, name: "有规则意识，知道在学校要遵守学校的各项规则", category: "habit", icon: "fa-backpack", description: "有规则意识，知道在学校要遵守学校的各项规则" },
    { id: 125, name: "有主动学习的意识", category: "habit", icon: "fa-gavel", description: "有主动学习的意识" },
];

// 学生数据
let studentsData = {
    student1: { name: "张小明", grade: "grade1", class: "class1", earnedStamps: [1, 4, 7], stampDates: {}, monthlyHistory: {} },
    student2: { name: "李小红", grade: "grade1", class: "class1", earnedStamps: [2, 5, 8, 11], stampDates: {}, monthlyHistory: {} },
    student3: { name: "王小华", grade: "grade2", class: "class2", earnedStamps: [3, 6, 9, 10, 12], stampDates: {}, monthlyHistory: {} },
    student4: { name: "赵小丽", grade: "grade1", class: "class2", earnedStamps: [1, 2, 3], stampDates: {}, monthlyHistory: {} },
    student5: { name: "刘小强", grade: "grade2", class: "class1", earnedStamps: [101, 102, 103, 104], stampDates: {}, monthlyHistory: {} },
    student6: { name: "陈小美", grade: "grade3", class: "class1", earnedStamps: [1, 5, 9, 13], stampDates: {}, monthlyHistory: {} },
    student7: { name: "孙小勇", grade: "grade3", class: "class2", earnedStamps: [2, 6, 10], stampDates: {}, monthlyHistory: {} }
};

// 数据持久化相关函数
const STORAGE_KEY = 'xiaobangyang_students_data';

// ========== Supabase 数据库封装 ==========
const Supabase = (() => {
    let client = null;
    
    function isEnabled() {
        return typeof window !== 'undefined' &&
            window.SUPABASE_CONFIG &&
            window.SUPABASE_CONFIG.enabled === true &&
            typeof window.SUPABASE_CONFIG.url === 'string' &&
            window.SUPABASE_CONFIG.url.length > 0;
    }
    
    function getClient() {
        if (!isEnabled()) return null;
        if (!client && window.supabase) {
            client = window.supabase.createClient(
                window.SUPABASE_CONFIG.url,
                window.SUPABASE_CONFIG.anonKey
            );
        }
        return client;
    }
    
    return {
        isEnabled,
        getClient,
        
        // 获取指定班级的学生列表
        async listStudents(grade, className) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                let query = client.from('students').select('*');
                if (grade) query = query.eq('grade', grade);
                if (className) query = query.eq('class', className);
                const { data, error } = await query;
                if (error) throw error;
                return { ok: true, students: data || [] };
            } catch (err) {
                console.error('Supabase listStudents 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 根据访问码查找学生
        async findStudentByAccessCode(accessCode) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                const { data, error } = await client
                    .from('students')
                    .select('*')
                    .eq('access_code', accessCode.toUpperCase())
                    .limit(1);
                
                if (error) throw error;
                if (!data || data.length === 0) {
                    return { ok: false, error: 'student not found' };
                }
                return { ok: true, student: data[0] };
            } catch (err) {
                console.error('Supabase findStudentByAccessCode 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 上传学生名单（替换指定班级）
        async uploadStudents(grade, className, students) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                // 删除旧数据
                const { error: delError } = await client
                    .from('students')
                    .delete()
                    .eq('grade', grade)
                    .eq('class', className);
                if (delError) throw delError;
                
                // 插入新数据，保留印章数据
                const toInsert = students.map(s => ({
                    name: s.name,
                    grade: grade,
                    class: className,
                    access_code: s.code || generateAccessCode(s.name, grade, className),
                    earned_stamps: s.earnedStamps || [],
                    stamp_dates: s.stampDates || {},
                    monthly_history: s.monthlyHistory || {}
                }));
                
                const { data, error } = await client.from('students').insert(toInsert);
                if (error) throw error;
                return { ok: true, added: toInsert.length };
            } catch (err) {
                console.error('Supabase uploadStudents 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 授予印章
        async awardStamp(studentName, grade, className, stampId, dateStr) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                // 查询学生
                const { data: students, error: queryError } = await client
                    .from('students')
                    .select('*')
                    .eq('name', studentName)
                    .eq('grade', grade)
                    .eq('class', className)
                    .limit(1);
                
                if (queryError) throw queryError;
                if (!students || students.length === 0) {
                    return { ok: false, error: 'student not found' };
                }
                
                const student = students[0];
                const earnedStamps = student.earned_stamps || [];
                if (!earnedStamps.includes(stampId)) {
                    earnedStamps.push(stampId);
                }
                
                const stampDates = student.stamp_dates || {};
                stampDates[String(stampId)] = dateStr;
                
                const { error: updateError } = await client
                    .from('students')
                    .update({
                        earned_stamps: earnedStamps,
                        stamp_dates: stampDates,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', student.id);
                
                if (updateError) throw updateError;
                return { ok: true };
            } catch (err) {
                console.error('Supabase awardStamp 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 取消印章
        async cancelStamp(studentName, grade, className, stampId) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                const { data: students, error: queryError } = await client
                    .from('students')
                    .select('*')
                    .eq('name', studentName)
                    .eq('grade', grade)
                    .eq('class', className)
                    .limit(1);
                
                if (queryError) throw queryError;
                if (!students || students.length === 0) {
                    return { ok: false, error: 'student not found' };
                }
                
                const student = students[0];
                const earnedStamps = (student.earned_stamps || []).filter(id => id !== stampId);
                const stampDates = student.stamp_dates || {};
                if (stampDates[String(stampId)]) {
                    delete stampDates[String(stampId)];
                }
                
                const { error: updateError } = await client
                    .from('students')
                    .update({
                        earned_stamps: earnedStamps,
                        stamp_dates: stampDates,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', student.id);
                
                if (updateError) throw updateError;
                return { ok: true };
            } catch (err) {
                console.error('Supabase cancelStamp 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 批量授予印章
        async batchAwardStamp(grade, className, stampId) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                const { data: students, error: queryError } = await client
                    .from('students')
                    .select('*')
                    .eq('grade', grade)
                    .eq('class', className);
                
                if (queryError) throw queryError;
                
                const dateStr = new Date().toLocaleDateString('zh-CN');
                const updates = students.map(s => {
                    const earnedStamps = s.earned_stamps || [];
                    if (!earnedStamps.includes(stampId)) {
                        earnedStamps.push(stampId);
                    }
                    const stampDates = s.stamp_dates || {};
                    stampDates[String(stampId)] = dateStr;
                    
                    return {
                        id: s.id,
                        earned_stamps: earnedStamps,
                        stamp_dates: stampDates,
                        updated_at: new Date().toISOString()
                    };
                });
                
                for (const update of updates) {
                    const { error } = await client
                        .from('students')
                        .update({
                            earned_stamps: update.earned_stamps,
                            stamp_dates: update.stamp_dates,
                            updated_at: update.updated_at
                        })
                        .eq('id', update.id);
                    if (error) console.warn('批量更新单个学生失败:', error);
                }
                
                return { ok: true, updated: updates.length };
            } catch (err) {
                console.error('Supabase batchAwardStamp 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 批量取消印章
        async batchCancelStamp(grade, className, stampId) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                const { data: students, error: queryError } = await client
                    .from('students')
                    .select('*')
                    .eq('grade', grade)
                    .eq('class', className);
                
                if (queryError) throw queryError;
                
                const updates = students.map(s => {
                    const earnedStamps = (s.earned_stamps || []).filter(id => id !== stampId);
                    const stampDates = s.stamp_dates || {};
                    if (stampDates[String(stampId)]) {
                        delete stampDates[String(stampId)];
                    }
                    
                    return {
                        id: s.id,
                        earned_stamps: earnedStamps,
                        stamp_dates: stampDates,
                        updated_at: new Date().toISOString()
                    };
                });
                
                for (const update of updates) {
                    const { error } = await client
                        .from('students')
                        .update({
                            earned_stamps: update.earned_stamps,
                            stamp_dates: update.stamp_dates,
                            updated_at: update.updated_at
                        })
                        .eq('id', update.id);
                    if (error) console.warn('批量取消单个学生失败:', error);
                }
                
                return { ok: true, updated: updates.length };
            } catch (err) {
                console.error('Supabase batchCancelStamp 失败:', err);
                return { ok: false, error: String(err) };
            }
        },
        
        // 重置班级集章（保留历史记录）
        async resetClass(grade, className, monthlyHistoryData) {
            const client = getClient();
            if (!client) return { ok: false, skipped: true };
            try {
                const { data: students, error: queryError } = await client
                    .from('students')
                    .select('*')
                    .eq('grade', grade)
                    .eq('class', className);
                
                if (queryError) throw queryError;
                
                // 为每个学生保存历史并重置
                for (const s of students) {
                    // 从本地数据获取该学生的历史记录
                    const localStudent = monthlyHistoryData ? 
                        Object.values(monthlyHistoryData).find(st => st.name === s.name && st.grade === grade && st.class === className) : 
                        null;
                    
                    const updatedHistory = localStudent ? localStudent.monthlyHistory : s.monthly_history || {};
                    
                    const { error } = await client
                        .from('students')
                        .update({
                            earned_stamps: [],
                            stamp_dates: {},
                            monthly_history: updatedHistory, // 保留历史
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', s.id);
                    if (error) console.warn('重置单个学生失败:', error);
                }
                
                return { ok: true };
            } catch (err) {
                console.error('Supabase resetClass 失败:', err);
                return { ok: false, error: String(err) };
            }
        }
    };
})();

// 生成访问码（6位字母数字）
function generateAccessCode(name, grade, className) {
    // 移除 Date.now()，确保相同学生每次生成相同的访问码
    const str = `${name}_${grade}_${className}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    let num = Math.abs(hash);
    for (let i = 0; i < 6; i++) {
        code += chars[num % chars.length];
        num = Math.floor(num / chars.length);
    }
    return code.toUpperCase(); // 确保大写
}

// ========== 云端（Google Apps Script）API 封装（保留作为备选）==========
const GAS = (() => {
    function isEnabled() {
        return typeof window !== 'undefined' &&
            window.GAS_CONFIG &&
            window.GAS_CONFIG.enabled === true &&
            typeof window.GAS_CONFIG.endpoint === 'string' &&
            window.GAS_CONFIG.endpoint.length > 0;
    }

    async function callApi(action, payload = {}) {
        if (!isEnabled()) return { ok: false, skipped: true };
        try {
            const resp = await fetch(window.GAS_CONFIG.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action,
                    apiKey: window.GAS_CONFIG.apiKey || '',
                    data: payload
                })
            });
            const json = await resp.json();
            return json;
        } catch (err) {
            console.error('GAS 调用失败:', err);
            return { ok: false, error: String(err) };
        }
    }

    return {
        isEnabled,
        callApi,
        async listStudents(grade, className) {
            return await callApi('listStudents', { grade, className });
        },
        async award(studentId, stampId, dateStr, meta) {
            return await callApi('award', { studentId, stampId, date: dateStr, meta });
        },
        async cancel(studentId, stampId, meta) {
            return await callApi('cancel', { studentId, stampId, meta });
        },
        async batchAward(grade, className, stampId) {
            return await callApi('batchAward', { grade, className, stampId });
        },
        async batchCancel(grade, className, stampId) {
            return await callApi('batchCancel', { grade, className, stampId });
        },
        async resetClass(grade, className, snapshot) {
            return await callApi('resetClass', { grade, className, snapshot });
        },
        async uploadStudents(grade, className, students) {
            return await callApi('uploadStudents', { grade, className, students });
        }
    };
})();

// 保存数据到localStorage
function saveStudentsData() {
    try {
        // 在保存数据前，确保所有学生的monthlyHistory数据完整
        Object.keys(studentsData).forEach(studentId => {
            const student = studentsData[studentId];
            if (!student.monthlyHistory) {
                student.monthlyHistory = {};
            }
        });
        
        // 打印保存前的数据状态
        console.log('保存数据到localStorage前的学生数据:', JSON.parse(JSON.stringify(studentsData)));
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(studentsData));
        // 可选：云端保存整份数据快照，便于家长端查看（开启 GAS 后生效）
        if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled()) {
            GAS.callApi('saveSnapshot', { snapshot: studentsData }).then(r => {
                if (!r || r.ok !== true) {
                    console.warn('云端保存快照失败或跳过:', r);
                }
            });
        }
        console.log('学生数据已保存到localStorage');
        
        // 验证保存的数据
        const savedData = localStorage.getItem(STORAGE_KEY);
        console.log('从localStorage读取的数据:', savedData ? JSON.parse(savedData) : null);
    } catch (error) {
        console.error('保存学生数据失败:', error);
    }
}

// 从localStorage加载数据
function loadStudentsData() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            studentsData = JSON.parse(savedData);
            
            // 确保所有学生对象都有必要的属性
            let hasUpdates = false;
            Object.keys(studentsData).forEach(studentId => {
                const student = studentsData[studentId];
                if (!student.monthlyHistory) {
                    student.monthlyHistory = {};
                    hasUpdates = true;
                }
                // 自动为没有访问码的学生生成访问码
                if (!student.code && student.name && student.grade && student.class) {
                    student.code = generateAccessCode(student.name, student.grade, student.class);
                    hasUpdates = true;
                    console.log(`为学生 ${student.name} 生成访问码: ${student.code}`);
                }
            });
            
            // 如果有更新，保存数据
            if (hasUpdates) {
                saveStudentsData();
                console.log('已为缺少访问码的学生自动生成访问码');
            }
            
            console.log('学生数据已从localStorage加载');
            return true;
        }
    } catch (error) {
        console.error('加载学生数据失败:', error);
    }
    return false;
}

// 清除保存的数据
function clearSavedData() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log('已清除保存的学生数据');
    } catch (error) {
        console.error('清除学生数据失败:', error);
    }
}

// 登录状态管理
let isTeacherLoggedIn = false; // 教师登录状态
const TEACHER_PASSWORD = 'WQXFXXX'; // 教师密码

// 当前状态
let currentUserType = 'teacher'; // 'teacher' 或 'parent'
let currentStudentId = '';
let currentCategory = 'all';
let currentGrade = '';
let currentClass = '';
let batchMode = false; // 批量模式
let selectedStampForBatch = null; // 选中的印章用于批量操作
let parentVerifiedStudentId = ''; // 家长验证通过的学生 ID
let isParentVerified = false; // 家长是否已验证

// DOM元素
const teacherBtn = document.getElementById('teacherBtn');
const parentBtn = document.getElementById('parentBtn');
const teacherControls = document.getElementById('teacherControls');
const parentControls = document.getElementById('parentControls');
const gradeSelect = document.getElementById('gradeSelect');
const classSelect = document.getElementById('classSelect');
const parentGradeSelect = document.getElementById('parentGradeSelect');
const parentClassSelect = document.getElementById('parentClassSelect');
const excelUpload = document.getElementById('excelUpload');
const resetStampsBtn = document.getElementById('resetStampsBtn');
const exportStatsBtn = document.getElementById('exportStatsBtn');
const exportAccessCodesBtn = document.getElementById('exportAccessCodesBtn');
const studentSearch = document.getElementById('studentSearch');
const studentSelect = document.getElementById('studentSelect');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const batchOperations = document.getElementById('batchOperations');
const batchStampName = document.getElementById('batchStampName');
const batchAwardBtn = document.getElementById('batchAwardBtn');
const cancelBatchBtn = document.getElementById('cancelBatchBtn');
// 添加数据管理按钮的引用
const saveDataBtn = document.getElementById('saveDataBtn');
const loadDataBtn = document.getElementById('loadDataBtn');
const clearDataBtn = document.getElementById('clearDataBtn');
const stampGrid = document.getElementById('stampGrid');
const progressFill = document.getElementById('progressFill');
const currentStampsEl = document.getElementById('currentStamps');
const totalStampsEl = document.getElementById('totalStamps');
const categoryProgress = document.getElementById('categoryProgress');
const currentMonth = document.getElementById('currentMonth');
const modal = document.getElementById('stampModal');
const modalTitle = document.getElementById('modalTitle');
const modalStampImage = document.getElementById('modalStampImage');
const modalDescription = document.getElementById('modalDescription');
const modalDate = document.getElementById('modalDate');
const modalTeacher = document.getElementById('modalTeacher');
const awardStampBtn = document.getElementById('awardStampBtn');
const closeModal = document.querySelector('.close');
const confirmResetModal = document.getElementById('confirmResetModal');
const confirmResetMessage = document.getElementById('confirmResetMessage');
const confirmResetBtn = document.getElementById('confirmResetBtn');
const cancelResetBtn = document.getElementById('cancelResetBtn');
const closeConfirmReset = document.getElementById('closeConfirmReset');
const batchAwardModal = document.getElementById('batchAwardModal');
const batchStampIcon = document.getElementById('batchStampIcon');
const batchStampTitle = document.getElementById('batchStampTitle');
const batchStampDesc = document.getElementById('batchStampDesc');
const batchStudentsList = document.getElementById('batchStudentsList');
const confirmBatchAwardBtn = document.getElementById('confirmBatchAwardBtn');
const cancelBatchAwardBtn = document.getElementById('cancelBatchAwardBtn');
const closeBatchAward = document.getElementById('closeBatchAward');
const historyModal = document.getElementById('historyModal');
const historyTitle = document.getElementById('historyTitle');
const historyContent = document.getElementById('historyContent');
const closeHistory = document.getElementById('closeHistory');
const categoryTabs = document.querySelectorAll('.category-tab');

// 登录相关DOM元素
const teacherLoginModal = document.getElementById('teacherLoginModal');
const teacherPasswordInput = document.getElementById('teacherPassword');
const loginBtn = document.getElementById('loginBtn');
const switchToParentBtn = document.getElementById('switchToParentBtn');
const loginError = document.getElementById('loginError');

// 家长访问码验证相关DOM元素
const parentAccessModal = document.getElementById('parentAccessModal');
const parentAccessCodeInput = document.getElementById('parentAccessCode');
const verifyAccessCodeBtn = document.getElementById('verifyAccessCodeBtn');
const cancelParentAccessBtn = document.getElementById('cancelParentAccessBtn');
const accessCodeError = document.getElementById('accessCodeError');
const accessCodeSuccess = document.getElementById('accessCodeSuccess');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 默认显示教师端，需要登录
    currentUserType = 'teacher';
    
    // 初始化主界面
    initializeMainInterface();
    
    // 设置为教师端
    switchUserType('teacher');
    
    // 添加登录相关事件监听器
    setupLoginEventListeners();
    
    // 事件监听器
    teacherBtn.addEventListener('click', () => switchUserType('teacher'));
    parentBtn.addEventListener('click', () => switchUserType('parent'));
    gradeSelect.addEventListener('change', handleGradeChange);
    classSelect.addEventListener('change', handleClassChange);
    parentGradeSelect.addEventListener('change', handleParentGradeChange);
    parentClassSelect.addEventListener('change', handleParentClassChange);
    excelUpload.addEventListener('change', handleExcelUpload);
    
    // 添加调试信息
    console.log('resetStampsBtn 元素:', resetStampsBtn);
    if (resetStampsBtn) {
        resetStampsBtn.addEventListener('click', function() {
            console.log('重新集章按钮被点击了！');
            handleResetStamps();
        });
        console.log('重新集章按钮事件监听器已添加');
    } else {
        console.error('找不到 resetStampsBtn 元素！');
    }
    
    // 添加导出按钮事件监听器
    if (exportStatsBtn) {
        exportStatsBtn.addEventListener('click', handleExportStats);
        console.log('导出统计表按钮事件监听器已添加');
    } else {
        console.error('找不到 exportStatsBtn 元素！');
    }
    
    // 导出访问码表按钮事件监听器
    if (exportAccessCodesBtn) {
        exportAccessCodesBtn.addEventListener('click', handleExportAccessCodes);
    }
    
    studentSearch.addEventListener('input', handleStudentSearch);
    studentSelect.addEventListener('change', handleStudentChange);
    viewHistoryBtn.addEventListener('click', showStudentHistory);
    closeModal.addEventListener('click', closeModalHandler);
    closeHistory.addEventListener('click', closeHistoryModal);
    confirmResetBtn.addEventListener('click', confirmResetStamps);
    cancelResetBtn.addEventListener('click', closeConfirmResetModal);
    closeConfirmReset.addEventListener('click', closeConfirmResetModal);
    batchAwardBtn.addEventListener('click', showBatchAwardModal);
    cancelBatchBtn.addEventListener('click', exitBatchMode);
    confirmBatchAwardBtn.addEventListener('click', confirmBatchAward);
    cancelBatchAwardBtn.addEventListener('click', closeBatchAwardModal);
    closeBatchAward.addEventListener('click', closeBatchAwardModal);
    
    // 添加数据管理按钮事件监听器
    if (saveDataBtn) {
        saveDataBtn.addEventListener('click', async function() {
            if (!currentGrade || !currentClass) {
                showNotification('请先选择年级和班级！', 'error');
                return;
            }
            
            // 保存到本地
            saveStudentsData();
            
            // 同步到云端
            if (Supabase.isEnabled()) {
                const classStudents = getClassStudents();
                const studentsArray = classStudents.map(s => ({
                    name: s.name,
                    grade: s.grade,
                    class: s.class,
                    earnedStamps: s.earnedStamps || [],
                    stampDates: s.stampDates || {},
                    monthlyHistory: s.monthlyHistory || {}
                }));
                
                const res = await Supabase.uploadStudents(currentGrade, currentClass, studentsArray);
                if (res && res.ok) {
                    showNotification(`数据已保存到本地和云端！同步了${classStudents.length}名学生的数据`);
                } else {
                    showNotification('数据已保存到本地，但云端同步失败！', 'warning');
                }
            } else {
            showNotification('数据已手动保存到本地存储！');
            }
        });
    }
    
    if (loadDataBtn) {
        loadDataBtn.addEventListener('click', function() {
            if (loadStudentsData()) {
                // 重新初始化界面
                updateStudentList();
                renderStamps();
                updateProgress();
                showNotification('数据已从本地存储加载！');
            } else {
                showNotification('没有找到已保存的数据！', 'error');
            }
        });
    }
    
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', function() {
            if (confirm('确定要清除本地保存的所有数据吗？此操作不可撤销！')) {
                clearSavedData();
                showNotification('本地保存的数据已清除！');
            }
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler();
        if (e.target === historyModal) closeHistoryModal();
        if (e.target === confirmResetModal) closeConfirmResetModal();
        if (e.target === batchAwardModal) closeBatchAwardModal();
    });
    awardStampBtn.addEventListener('click', awardStamp);
    
    // 类别标签事件
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderStamps();
        });
    });
});

// 切换用户类型
function switchUserType(type) {
    // 如果切换到教师端但未登录，显示登录页面
    if (type === 'teacher' && !isTeacherLoggedIn) {
        showTeacherLoginModal();
        return;
    }
    
    currentUserType = type;
    
    if (type === 'teacher') {
        teacherBtn.classList.add('active');
        parentBtn.classList.remove('active');
    } else {
        parentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
    }
    
    // 根据用户类型更新界面
    updateUIForUserType();
}

// 根据用户类型更新界面
function updateUIForUserType() {
    if (currentUserType === 'parent') {
        // 家长端只能查看，不能授予印章
        awardStampBtn.style.display = 'none';
        // 隐藏教师控制区域
        teacherControls.style.display = 'none';
        
        // 如果家长已验证，显示专属界面
        if (isParentVerified && parentVerifiedStudentId) {
            parentControls.style.display = 'none';
            updateParentUI();
        } else {
            // 未验证时显示选择界面
        parentControls.style.display = 'flex';
        }
        
        // 家长端可以查看历史
        if (currentStudentId) {
            viewHistoryBtn.style.display = 'flex';
        }
    } else {
        // 教师端可以授予印章
        awardStampBtn.style.display = 'block';
        // 显示教师控制区域，隐藏家长控制区域
        teacherControls.style.display = 'flex';
        parentControls.style.display = 'none';
        // 教师端的历史查看也需要选择学生
        if (currentStudentId) {
            viewHistoryBtn.style.display = 'flex';
        }
    }
    
    // 重新渲染印章以反映权限变化
    renderStamps();
}

// 处理学生选择变化
function handleStudentChange() {
    currentStudentId = studentSelect.value;
    
    // 显示或隐藏查看历史按钮
    if (currentStudentId) {
        // 在教师端和家长端都可以查看历史
        viewHistoryBtn.style.display = 'flex';
    } else {
        viewHistoryBtn.style.display = 'none';
    }
    
    // 更新访问码显示
    updateAccessCodeDisplay();
    
    renderStamps();
    updateProgress();
}

// 渲染印章网格
function renderStamps() {
    console.log('=== renderStamps 开始执行 ===');
    console.log('当前状态:', {
        currentStudentId,
        currentCategory,
        currentUserType
    });
    
    stampGrid.innerHTML = '';
    
    // 如果没有选择学生，根据用户类型显示不同的界面
    if (!currentStudentId) {
        console.log('没有选择学生，显示预览模式');
        if (currentUserType === 'teacher') {
            renderStampsForTeacher();
        } else {
            renderStampsForPreview();
        }
        return;
    }
    
    // 获取当前学生的已获得印章
    const student = studentsData[currentStudentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    console.log('学生信息:', {
        studentId: currentStudentId,
        student,
        earnedStamps
    });
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
        console.log('使用二年级印章数据，总数:', currentStampsData.length);
    } else {
        currentStampsData = stampsData;
        console.log('使用一年级印章数据，总数:', currentStampsData.length);
    }
    
    console.log('当前类别:', currentCategory);
    
    // 根据类别筛选印章
    const filteredStamps = currentCategory === 'all' 
        ? currentStampsData 
        : currentStampsData.filter(stamp => stamp.category === currentCategory);
    
    console.log('筛选结果:', {
        category: currentCategory,
        totalStamps: currentStampsData.length,
        filteredCount: filteredStamps.length,
        filteredStamps: filteredStamps.map(s => ({ 
            id: s.id, 
            name: s.name.substring(0, 20) + '...', 
            category: s.category 
        }))
    });
    
    // 如果没有印章数据，显示提示
    if (filteredStamps.length === 0) {
        console.log('没有找到印章，显示提示信息');
        stampGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">该类别下暂无印章</p>';
        return;
    }
    
    console.log('开始渲染', filteredStamps.length, '个印章');
    
    // 渲染每个印章
    filteredStamps.forEach((stamp, index) => {
        const isEarned = earnedStamps.includes(stamp.id);
        console.log(`渲染印章 ${index + 1}:`, {
            id: stamp.id,
            name: stamp.name.substring(0, 15) + '...',
            category: stamp.category,
            isEarned
        });
        const stampEl = createStampElement(stamp, isEarned);
        console.log('创建的印章元素:', stampEl);
        console.log('印章元素HTML:', stampEl.outerHTML.substring(0, 200) + '...');
            
        // 检查stampGrid的状态
        console.log('stampGrid元素:', stampGrid);
        console.log('stampGrid的样式:', {
            display: getComputedStyle(stampGrid).display,
            visibility: getComputedStyle(stampGrid).visibility,
            opacity: getComputedStyle(stampGrid).opacity,
            height: getComputedStyle(stampGrid).height,
            width: getComputedStyle(stampGrid).width,
            overflow: getComputedStyle(stampGrid).overflow
        });
            
        stampGrid.appendChild(stampEl);
        
        // 强制确保印章元素可见
        stampEl.style.cssText += 'display: flex !important; visibility: visible !important; opacity: 1 !important; position: relative !important; z-index: 2 !important; background: #ffffff !important; border: 2px solid #ff0000 !important;';
        
        console.log('已添加到stampGrid，当前stampGrid子元素数量:', stampGrid.children.length);
            
        // 检查添加后的印章元素状态
        console.log('印章元素在DOM中的状态:', {
            offsetWidth: stampEl.offsetWidth,
            offsetHeight: stampEl.offsetHeight,
            clientWidth: stampEl.clientWidth,
            clientHeight: stampEl.clientHeight,
            display: getComputedStyle(stampEl).display,
            visibility: getComputedStyle(stampEl).visibility,
            opacity: getComputedStyle(stampEl).opacity
        });
    });
    
    // 强制确保stampGrid和印章可见
    stampGrid.style.cssText += 'display: grid !important; visibility: visible !important; opacity: 1 !important; position: relative !important; z-index: 1 !important;';
    
    console.log('已强制设置stampGrid样式:', {
        display: getComputedStyle(stampGrid).display,
        visibility: getComputedStyle(stampGrid).visibility,
        opacity: getComputedStyle(stampGrid).opacity,
        position: getComputedStyle(stampGrid).position,
        zIndex: getComputedStyle(stampGrid).zIndex
    });
    
    // 检查最终的DOM状态
    console.log('stampGrid最终状态:', {
        element: stampGrid,
        childCount: stampGrid.children.length,
        innerHTML: stampGrid.innerHTML.length > 0 ? '有内容' : '无内容',
        visible: stampGrid.style.display !== 'none',
        offsetHeight: stampGrid.offsetHeight,
        offsetWidth: stampGrid.offsetWidth
    });
    
    console.log('=== renderStamps 执行完成 ===');
}

// 为教师端渲染印章（未选择学生时）
function renderStampsForTeacher() {
    // 显示提示信息
    const tipEl = document.createElement('div');
    tipEl.className = 'stamp-teacher-tip';
    tipEl.innerHTML = `
        <div style="text-align: center; color: #666; padding: 20px; background: #e3f2fd; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
            <i class="fas fa-chalkboard-teacher" style="font-size: 24px; color: #2196f3; margin-bottom: 10px;"></i>
            <p style="margin: 0; font-size: 16px; font-weight: 500; color: #1976d2;">教师端：请先选择年级、班级和学生进行集章管理</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">以下显示所有榜样细则，选择学生后可进行标记和批量操作</p>
        </div>
    `;
    stampGrid.appendChild(tipEl);
    
    // 选择要显示的印章数据
    let teacherStampsData = stampsData;
    
    // 如果选择了特定年级，显示对应年级的印章
    if (currentGrade === 'grade2') {
        teacherStampsData = grade2StampsData;
    }
    
    // 根据类别筛选印章
    const filteredStamps = currentCategory === 'all' 
        ? teacherStampsData 
        : teacherStampsData.filter(stamp => stamp.category === currentCategory);
    
    // 如果没有印章数据，显示提示
    if (filteredStamps.length === 0) {
        const noStampsEl = document.createElement('p');
        noStampsEl.style.cssText = 'grid-column: 1/-1; text-align: center; color: #999; padding: 40px;';
        noStampsEl.textContent = '该类别下暂无印章';
        stampGrid.appendChild(noStampsEl);
        return;
    }
    
    // 渲染每个印章（教师模式 - 显示操作按钮但禁用）
    filteredStamps.forEach(stamp => {
        const stampEl = createStampElementForTeacher(stamp);
        stampGrid.appendChild(stampEl);
    });
}

// 创建教师端印章元素（未选择学生时）
function createStampElementForTeacher(stamp) {
    const stampEl = document.createElement('div');
    stampEl.className = 'stamp-item teacher-preview-mode';
    stampEl.dataset.stampId = stamp.id;
    
    // 截取印章名称，如果太长则显示省略号
    const displayName = stamp.name.length > 25 ? stamp.name.substring(0, 25) + '...' : stamp.name;
    
    stampEl.innerHTML = `
        <div class="stamp-icon">
            <i class="fas ${stamp.icon}"></i>
        </div>
        <div class="stamp-name" title="${stamp.name}">${displayName}</div>
        <div class="stamp-category">${getCategoryName(stamp.category)}</div>
        <div class="stamp-actions teacher-preview">
            <button class="batch-select-btn" data-stamp-id="${stamp.id}" title="选择学生后可进行批量操作" disabled>
                <i class="fas fa-check-square"></i>
            </button>
        </div>
        <div class="teacher-preview-overlay">
            <i class="fas fa-user-graduate"></i>
        </div>
    `;
    
    // 添加点击事件（只能查看，不能操作）
    stampEl.addEventListener('click', (e) => {
        // 如果点击的是批量选择按钮，阻止事件冒泡并显示提示
        if (e.target.closest('.batch-select-btn')) {
            e.stopPropagation();
            showNotification('请先选择年级、班级和学生后再进行批量操作！', 'error');
            return;
        }
        
        // 打开印章详情模态框（教师预览模式）
        openStampModalForTeacherPreview(stamp);
    });
    
    return stampEl;
}

// 打开教师端预览模态框
function openStampModalForTeacherPreview(stamp) {
    modalTitle.textContent = stamp.name;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    modalDate.textContent = '';
    modalTeacher.textContent = '';
    
    // 显示教师端提示信息
    const teacherTip = document.createElement('div');
    teacherTip.className = 'teacher-modal-tip';
    teacherTip.innerHTML = `
        <div style="background: #e3f2fd; padding: 12px; border-radius: 6px; margin: 10px 0; border-left: 4px solid #2196f3;">
            <p style="margin: 0; font-size: 14px; color: #1976d2;">
                <i class="fas fa-info-circle"></i> 教师端：选择学生后可为其标记此项目为“已完成”
            </p>
        </div>
    `;
    
    // 在描述后添加提示
    modalDescription.parentNode.insertBefore(teacherTip, modalDescription.nextSibling);
    
    // 隐藏操作按钮
    awardStampBtn.style.display = 'none';
    
    // 清除模态框数据
    modal.dataset.stampId = '';
    modal.dataset.action = '';
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 渲染印章预览（用于未选择学生时显示）
function renderStampsForPreview() {
    // 显示提示信息
    const tipEl = document.createElement('div');
    tipEl.className = 'stamp-preview-tip';
    tipEl.innerHTML = `
        <div style="text-align: center; color: #666; padding: 20px; background: #f8f9fa; border-radius: 10px; margin-bottom: 20px;">
            <i class="fas fa-info-circle" style="font-size: 24px; color: #4a6baf; margin-bottom: 10px;"></i>
            <p style="margin: 0; font-size: 16px; font-weight: 500;">请先选择年级、班级和学生查看具体的集章状态</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #999;">以下显示所有榜样细则供参考</p>
        </div>
    `;
    stampGrid.appendChild(tipEl);
    
    // 选择要显示的印章数据（默认显示一年级的印章）
    let previewStampsData = stampsData;
    
    // 如果选择了特定年级，显示对应年级的印章
    if (currentGrade === 'grade2') {
        previewStampsData = grade2StampsData;
    }
    
    // 根据类别筛选印章
    const filteredStamps = currentCategory === 'all' 
        ? previewStampsData 
        : previewStampsData.filter(stamp => stamp.category === currentCategory);
    
    // 如果没有印章数据，显示提示
    if (filteredStamps.length === 0) {
        const noStampsEl = document.createElement('p');
        noStampsEl.style.cssText = 'grid-column: 1/-1; text-align: center; color: #999; padding: 40px;';
        noStampsEl.textContent = '该类别下暂无印章';
        stampGrid.appendChild(noStampsEl);
        return;
    }
    
    // 渲染每个印章（预览模式）
    filteredStamps.forEach(stamp => {
        const stampEl = createStampElementForPreview(stamp);
        stampGrid.appendChild(stampEl);
    });
}

// 创建印章预览元素
function createStampElementForPreview(stamp) {
    const stampEl = document.createElement('div');
    stampEl.className = 'stamp-item preview-mode';
    stampEl.dataset.stampId = stamp.id;
    
    // 截取印章名称，如果太长则显示省略号
    const displayName = stamp.name.length > 25 ? stamp.name.substring(0, 25) + '...' : stamp.name;
    
    stampEl.innerHTML = `
        <div class="stamp-icon">
            <i class="fas ${stamp.icon}"></i>
        </div>
        <div class="stamp-name" title="${stamp.name}">${displayName}</div>
        <div class="stamp-category">${getCategoryName(stamp.category)}</div>
        <div class="preview-overlay">
            <i class="fas fa-eye"></i>
        </div>
    `;
    
    // 添加点击事件（只能查看，不能操作）
    stampEl.addEventListener('click', () => {
        openStampModalForPreview(stamp);
    });
    
    return stampEl;
}

// 打开印章预览模态框
function openStampModalForPreview(stamp) {
    modalTitle.textContent = stamp.name;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    modalDate.textContent = '';
    modalTeacher.textContent = '';
    
    // 隐藏操作按钮
    awardStampBtn.style.display = 'none';
    
    // 清除模态框数据
    modal.dataset.stampId = '';
    modal.dataset.action = '';
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 创建印章元素
function createStampElement(stamp, isEarned) {
    const stampEl = document.createElement('div');
    stampEl.className = `stamp-item ${isEarned ? 'earned' : ''}`;
    stampEl.dataset.stampId = stamp.id;
    
    // 截取印章名称，如果太长则显示省略号
    const displayName = stamp.name.length > 25 ? stamp.name.substring(0, 25) + '...' : stamp.name;
    
    stampEl.innerHTML = `
        <div class="stamp-icon">
            <i class="fas ${stamp.icon}"></i>
        </div>
        <div class="stamp-name" title="${stamp.name}">${displayName}</div>
        <div class="stamp-category">${getCategoryName(stamp.category)}</div>
        ${currentUserType === 'teacher' ? `<div class="stamp-actions">
            <button class="batch-select-btn" data-stamp-id="${stamp.id}" title="选择进行批量操作">
                <i class="fas fa-check-square"></i>
            </button>
        </div>` : ''}
    `;
    
    // 添加点击事件
    stampEl.addEventListener('click', (e) => {
        // 如果点击的是批量选择按钮，阻止事件冒泡
        if (e.target.closest('.batch-select-btn')) {
            e.stopPropagation();
            handleBatchSelect(stamp);
            return;
        }
        
        // 如果是已获得的印章且是教师端，可以取消
        if (isEarned && currentUserType === 'teacher') {
            openCancelStampModal(stamp);
        } else {
            openStampModal(stamp, isEarned);
        }
    });
    
    return stampEl;
}

// 获取类别完成状态
function getCategoryCompletionStatus(category, studentId) {
    if (!studentId) return { completed: 0, total: 0, isComplete: false };
    
    const student = studentsData[studentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
    const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
    
    return {
        completed: earnedCategoryStamps.length,
        total: categoryStamps.length,
        isComplete: categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length
    };
}

// 获取类别名称
function getCategoryName(category) {
    const categoryNames = {
        study: '学习',
        behavior: '文明',
        teamwork: '纪律',
        responsibility: '劳动',
        unity: '团结',
        honesty: '诚信',
        habit: '习惯'
    };
    return categoryNames[category] || category;
}

// 打开印章模态框
function openStampModal(stamp, isEarned) {
    modalTitle.textContent = stamp.name;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    
    // 如果印章已获得，显示完成日期
    if (isEarned) {
        const student = studentsData[currentStudentId];
        if (student && student.stampDates && student.stampDates[stamp.id]) {
            modalDate.textContent = `完成日期: ${student.stampDates[stamp.id]}`;
        } else {
            // 如果没有记录日期（旧数据），显示默认日期
            modalDate.textContent = `完成日期: 较早完成`;
        }
        awardStampBtn.textContent = '已完成';
        awardStampBtn.disabled = true;
        awardStampBtn.style.backgroundColor = '#ccc';
    } else {
        modalDate.textContent = '';
        modalTeacher.textContent = '';
        awardStampBtn.textContent = '已完成';
        awardStampBtn.disabled = false;
        awardStampBtn.style.backgroundColor = '';
    }
    
    // 根据用户类型设置按钮可见性
    if (currentUserType === 'parent') {
        awardStampBtn.style.display = 'none';
    } else {
        awardStampBtn.style.display = isEarned ? 'none' : 'block';
    }
    
    // 存储当前印章ID和动作类型
    modal.dataset.stampId = stamp.id;
    modal.dataset.action = 'award'; // 重置为正常授予模式
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 显示学生历史
function showStudentHistory() {
    if (!currentStudentId) {
        showNotification('请先选择学生！', 'error');
        return;
    }
    
    const student = studentsData[currentStudentId];
    if (!student) {
        showNotification('学生数据不存在！', 'error');
        return;
    }
    
    historyTitle.textContent = `${student.name}的集章历史`;
    
    // 渲染历史内容
    renderHistoryContent(student);
    
    // 显示模态框
    historyModal.style.display = 'flex';
}

// 渲染历史内容
function renderHistoryContent(student) {
    historyContent.innerHTML = '';
    
    // 获取所有历史记录
    const history = student.monthlyHistory || {};
    const months = Object.keys(history).sort().reverse(); // 按时间倒序
    
    if (months.length === 0) {
        historyContent.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">暂无历史记录</p>';
        return;
    }
    
    // 计算能否成为榜样之星 - 使用新的评定标准（每个月都要5枚以上）
    const starMonths = months.filter(month => history[month].awards >= 5);
    const canBeModelStar = months.length > 0 && starMonths.length === months.length; // 每个月都要获得5枚或以上奖章
    
    // 显示榜样之星状态
    if (canBeModelStar) {
        const starDiv = document.createElement('div');
        starDiv.className = 'star-status';
        starDiv.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border: 2px solid #ffd700;">
                <h3 style="color: #ff6f00; margin: 0;">⭐ 恭喜！该学生已符合"榜样之星"条件 ⭐</h3>
                <p style="margin: 5px 0 0 0; color: #856404;">每个月都获得了5枚或以上奖章（${starMonths.length}/${months.length}个月全部达标）</p>
            </div>
        `;
        historyContent.appendChild(starDiv);
    }
    
    // 显示每个月的详细记录
    months.forEach(month => {
        const monthData = history[month];
        const monthDiv = document.createElement('div');
        monthDiv.className = 'history-month-detail';
        
        const isStarMonth = monthData.awards >= 5;
        const [year, monthNum] = month.split('-');
        
        // 获取学生年级对应的印章数据
        const currentStampsData = student.grade === 'grade2' ? grade2StampsData : stampsData;
        
        // 创建月份标题
        const monthHeader = document.createElement('div');
        monthHeader.className = 'month-header';
        monthHeader.innerHTML = `
            <h3>${year}年${parseInt(monthNum)}月 ${isStarMonth ? '⭐' : ''}</h3>
            <div class="month-awards">
                <span class="award-count">${monthData.awards}</span>
                <span class="award-text">枚奖章</span>
                ${isStarMonth ? '<span class="star-badge">达标月份</span>' : ''}
            </div>
        `;
        monthDiv.appendChild(monthHeader);
        
        // 创建各个类别的详细内容
        const categories = [
            { key: 'study', name: '学习榜样' },
            { key: 'behavior', name: '文明榜样' },
            { key: 'teamwork', name: '纪律榜样' },
            { key: 'responsibility', name: '劳动榜样' },
            { key: 'unity', name: '团结榜样' },
            { key: 'honesty', name: '诚信榜样' },
            { key: 'habit', name: '习惯榜样' }
        ];
        
        categories.forEach(category => {
            const categoryStamps = currentStampsData.filter(stamp => stamp.category === category.key);
            if (categoryStamps.length === 0) return;
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-detail';
            
            // 检查该类别是否完成
            const completedStamps = categoryStamps.filter(stamp => 
                monthData.earnedStamps.includes(stamp.id)
            );
            const isCompleted = completedStamps.length === categoryStamps.length;
            
            // 计算奖章获得日期（最后一个细则完成的日期）
            let badgeDate = '';
            if (isCompleted && monthData.stampDates) {
                const dates = completedStamps
                    .map(stamp => monthData.stampDates[stamp.id])
                    .filter(date => date)
                    .sort();
                badgeDate = dates[dates.length - 1] || '';
            }
            
            // 创建类别标题
            let categoryHeader = `
                <div class="category-header ${isCompleted ? 'completed' : ''}">
                    <h4>
                        ${category.name}
                        ${isCompleted ? `<span class="badge-icon">🏆</span>` : ''}
                    </h4>
                    ${isCompleted ? `<span class="badge-date">奖章获得日期：${badgeDate}</span>` : ''}
                </div>
            `;
            
            // 创建细则列表
            let rulesHtml = '<div class="rules-list">';
            categoryStamps.forEach(stamp => {
                const isStampCompleted = monthData.earnedStamps.includes(stamp.id);
                const stampDate = isStampCompleted && monthData.stampDates ? 
                    monthData.stampDates[stamp.id] || '完成日期未记录' : '';
                
                rulesHtml += `
                    <div class="rule-item ${isStampCompleted ? 'completed' : 'not-completed'}">
                        <span class="rule-status">${isStampCompleted ? '✓' : '×'}</span>
                        <span class="rule-text">${stamp.description}</span>
                        ${isStampCompleted ? `<span class="rule-date">${stampDate}</span>` : ''}
                    </div>
                `;
            });
            rulesHtml += '</div>';
            
            categoryDiv.innerHTML = categoryHeader + rulesHtml;
            monthDiv.appendChild(categoryDiv);
        });
        
        historyContent.appendChild(monthDiv);
    });
}

// 关闭历史模态框
function closeHistoryModal() {
    historyModal.style.display = 'none';
}

// 处理批量选择
function handleBatchSelect(stamp) {
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    selectedStampForBatch = stamp;
    batchMode = true;
    
    // 显示批量操作栏
    batchStampName.textContent = `已选择：${stamp.name}`;
    batchOperations.style.display = 'block';
    
    showNotification(`已选择印章：${stamp.name}，可进行批量操作`);
}

// 退出批量模式
function exitBatchMode() {
    batchMode = false;
    selectedStampForBatch = null;
    if (batchOperations) {
        batchOperations.style.display = 'none';
    }
    // 清理模态框状态
    if (modal.dataset.action === 'cancel') {
        modal.dataset.action = '';
        modal.dataset.stampId = '';
    }
    showNotification('已退出批量模式');
}

// 显示批量授予模态框
function showBatchAwardModal() {
    if (!selectedStampForBatch) {
        showNotification('请先选择一个印章！', 'error');
        return;
    }
    
    if (!batchStampIcon || !batchStampTitle || !batchStampDesc) {
        showNotification('界面元素未正确加载！', 'error');
        return;
    }
    
    // 设置印章信息
    batchStampIcon.innerHTML = `<i class="fas ${selectedStampForBatch.icon}"></i>`;
    batchStampTitle.textContent = selectedStampForBatch.name;
    batchStampDesc.textContent = selectedStampForBatch.description;
    
    // 获取当前班级的所有学生
    const classStudents = getClassStudents();
    
    if (classStudents.length === 0) {
        showNotification('当前班级没有学生！', 'error');
        return;
    }
    
    // 渲染学生列表
    renderBatchStudentsList(classStudents);
    
    // 显示模态框
    if (batchAwardModal) {
        batchAwardModal.style.display = 'flex';
    }
}

// 获取当前班级的所有学生
function getClassStudents() {
    return Object.entries(studentsData)
        .map(([id, student]) => ({ id, ...student }))
        .filter(student => 
            student.grade === currentGrade && 
            student.class === currentClass
        );
}

// 渲染批量学生列表
function renderBatchStudentsList(students) {
    if (!batchStudentsList) {
        console.error('批量学生列表元素不存在');
        return;
    }
    
    if (!selectedStampForBatch) {
        console.error('没有选中的印章');
        return;
    }
    
    batchStudentsList.innerHTML = '';
    
    students.forEach(student => {
        const hasStamp = student.earnedStamps.includes(selectedStampForBatch.id);
        const studentEl = document.createElement('div');
        studentEl.className = `student-item ${hasStamp ? 'selected' : ''}`;
        studentEl.textContent = student.name;
        
        if (hasStamp) {
            studentEl.title = '已完成此项目';
        }
        
        batchStudentsList.appendChild(studentEl);
    });
}

// 确认批量授予
function confirmBatchAward() {
    if (!selectedStampForBatch) {
        showNotification('请先选择一个印章！', 'error');
        return;
    }
    
    const classStudents = getClassStudents();
    let awardedCount = 0;
    
    // 为所有没有该印章的学生授予印章
    classStudents.forEach(student => {
        if (!student.earnedStamps.includes(selectedStampForBatch.id)) {
            student.earnedStamps.push(selectedStampForBatch.id);
            
            // 记录获得印章的日期
            if (!student.stampDates) {
                student.stampDates = {};
            }
            student.stampDates[selectedStampForBatch.id] = getCurrentDate();
            
            awardedCount++;
        }
    });
    
    // 保存数据到localStorage
    saveStudentsData();
    // Supabase 云端同步
    if (Supabase.isEnabled()) {
        Supabase.batchAwardStamp(currentGrade, currentClass, selectedStampForBatch.id).then(r => {
            if (!r || r.ok !== true) console.warn('Supabase batchAward 失败或跳过', r);
        });
    }
    
    // 保存印章名称用于显示
    const stampName = selectedStampForBatch.name;
    
    // 关闭模态框
    closeBatchAwardModal();
    
    // 退出批量模式
    exitBatchMode();
    
    // 显示成功消息
    showNotification(`批量标记已完成成功！为${awardedCount}名学生标记了“${stampName}”为已完成`);
    
    // 更新界面
    renderStamps();
    updateProgress();
}

// 关闭批量授予模态框
function closeBatchAwardModal() {
    if (batchAwardModal) {
        batchAwardModal.style.display = 'none';
    }
}

// 打开取消印章模态框
function openCancelStampModal(stamp) {
    modalTitle.textContent = `取消印章：${stamp.name}`;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    
    // 获取当前选中的学生，如果没有选中则显示所有获得该印章的学生
    if (currentStudentId) {
        const student = studentsData[currentStudentId];
        modalDate.textContent = `完成日期: ${student.stampDates[stamp.id] || '较早获得'}`;
        awardStampBtn.textContent = '取消已完成';
        awardStampBtn.style.backgroundColor = '#f44336';
    } else {
        modalDate.textContent = '点击取消按钮可以为所有获得该印章的学生取消';
        awardStampBtn.textContent = '批量取消已完成';
        awardStampBtn.style.backgroundColor = '#f44336';
    }
    
    awardStampBtn.disabled = false;
    awardStampBtn.style.display = 'block';
    
    // 存储当前印章ID和取消动作
    modal.dataset.stampId = stamp.id;
    modal.dataset.action = 'cancel';
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 关闭模态框
function closeModalHandler() {
    modal.style.display = 'none';
    // 清理模态框状态
    modal.dataset.action = '';
    modal.dataset.stampId = '';
    // 重置按钮样式
    awardStampBtn.style.backgroundColor = '';
    awardStampBtn.disabled = false;
    
    // 清理教师端提示元素
    const teacherTip = modal.querySelector('.teacher-modal-tip');
    if (teacherTip) {
        teacherTip.remove();
    }
}

// 授予印章
function awardStamp() {
    const stampId = parseInt(modal.dataset.stampId);
    const action = modal.dataset.action;
    
    // 检查动作类型
    if (action === 'cancel') {
        // 取消印章操作
        if (currentStudentId) {
            // 取消单个学生的印章
            cancelStudentStamp(currentStudentId, stampId);
        } else {
            // 批量取消印章
            batchCancelStamp(stampId);
        }
    } else {
        // 正常授予印章操作
        if (!currentStudentId) {
            alert('请先选择一个学生');
            return;
        }
        
        const student = studentsData[currentStudentId];
        if (!student.earnedStamps.includes(stampId)) {
            student.earnedStamps.push(stampId);
            
            // 记录获得印章的日期
            if (!student.stampDates) {
                student.stampDates = {};
            }
            student.stampDates[stampId] = getCurrentDate();
            
            // 保存数据到localStorage
            saveStudentsData();
            // Supabase 云端同步
            if (Supabase.isEnabled()) {
                const dateStr = student.stampDates[stampId];
                Supabase.awardStamp(student.name, student.grade, student.class, stampId, dateStr).then(r => {
                    if (!r || r.ok !== true) console.warn('Supabase award 失败或跳过', r);
                });
            }
            
            // 显示成功消息
            showNotification('已完成标记成功！');
        }
    }
    
    // 重新渲染印章和进度
    renderStamps();
    updateProgress();
    
    // 关闭模态框
    closeModalHandler();
}

// 取消学生印章
function cancelStudentStamp(studentId, stampId) {
    const student = studentsData[studentId];
    if (student && student.earnedStamps.includes(stampId)) {
        // 移除印章
        student.earnedStamps = student.earnedStamps.filter(id => id !== stampId);
        
        // 移除日期记录
        if (student.stampDates && student.stampDates[stampId]) {
            delete student.stampDates[stampId];
        }
        
        // 保存数据到localStorage
        saveStudentsData();
        // Supabase 云端同步
        if (Supabase.isEnabled()) {
            Supabase.cancelStamp(student.name, student.grade, student.class, stampId).then(r => {
                if (!r || r.ok !== true) console.warn('Supabase cancel 失败或跳过', r);
            });
        }
        
        showNotification('取消已完成标记成功！');
    }
}

// 批量取消印章
function batchCancelStamp(stampId) {
    const classStudents = getClassStudents();
    let canceledCount = 0;
    
    classStudents.forEach(student => {
        if (student.earnedStamps.includes(stampId)) {
            student.earnedStamps = student.earnedStamps.filter(id => id !== stampId);
            
            // 移除日期记录
            if (student.stampDates && student.stampDates[stampId]) {
                delete student.stampDates[stampId];
            }
            
            canceledCount++;
        }
    });
    
    // 保存数据到localStorage
    saveStudentsData();
    // Supabase 云端同步
    if (Supabase.isEnabled()) {
        Supabase.batchCancelStamp(currentGrade, currentClass, stampId).then(r => {
            if (!r || r.ok !== true) console.warn('Supabase batchCancel 失败或跳过', r);
        });
    }
    
    showNotification(`批量取消已完成标记成功！为${canceledCount}名学生取消了已完成标记`);
}

// 更新进度条
function updateProgress() {
    if (!currentStudentId) {
        progressFill.style.width = '0%';
        currentStampsEl.textContent = '0';
        renderCategoryProgress();
        return;
    }
    
    const student = studentsData[currentStudentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    // 计算各类别下完成的奖章数量
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    let completedCategories = 0;
    
    categories.forEach(category => {
        const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
        const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
        
        // 如果该类别下所有细则都完成，则该类别奖章完成
        if (categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length) {
            completedCategories++;
        }
    });
    
    const totalCategories = categories.length; // 总共7个类别奖章
    const percentage = (completedCategories / totalCategories) * 100;
    
    progressFill.style.width = `${percentage}%`;
    currentStampsEl.textContent = completedCategories;
    totalStampsEl.textContent = totalCategories;
    
    // 更新类别进度显示
    renderCategoryProgress();
}

// 渲染类别进度
function renderCategoryProgress() {
    if (!categoryProgress) return;
    
    categoryProgress.innerHTML = '';
    
    if (!currentStudentId) {
        return;
    }
    
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    
    categories.forEach(category => {
        const status = getCategoryCompletionStatus(category, currentStudentId);
        const categoryEl = document.createElement('div');
        categoryEl.className = `category-item ${status.isComplete ? 'completed' : ''}`;
        
        categoryEl.innerHTML = `
            <div class="category-name">${getCategoryName(category)}</div>
            <div class="category-status">${status.completed}/${status.total}</div>
            <div class="category-badge"></div>
        `;
        
        categoryProgress.appendChild(categoryEl);
    });
}

// 显示通知
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '2000';
    notification.style.animation = 'slideIn 0.3s, slideOut 0.3s 2.7s';
    notification.style.animationFillMode = 'forwards';
    
    // 根据类型设置样式
    if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = '#4caf50';
        notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // 3秒后移除通知
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// 获取当前月份标识
function getCurrentMonthKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

// 更新当前月份显示
function updateCurrentMonth() {
    if (!currentMonth) return;
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    currentMonth.textContent = `当前月份：${year}年${month}月`;
}

// 处理重新集章
function handleResetStamps() {
    console.log('handleResetStamps 被调用了'); // 调试信息
    console.log('currentGrade:', currentGrade, 'currentClass:', currentClass); // 调试信息
    
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    // 显示自定义确认模态框
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    confirmResetMessage.textContent = `确定要为${gradeName}${className}的所有学生重置集章状态吗？`;
    confirmResetModal.style.display = 'flex';
}

// 确认重置集章
function confirmResetStamps() {
    closeConfirmResetModal();
    
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    showNotification(`正在为${gradeName}${className}重置集章状态...`);
    
    resetClassStamps();
}

// 关闭确认重置模态框
function closeConfirmResetModal() {
    confirmResetModal.style.display = 'none';
}

// 重置班级集章状态
function resetClassStamps() {
    const currentMonthKey = getCurrentMonthKey();
    let resetCount = 0;
    
    console.log('开始重置集章状态，当前月份:', currentMonthKey);
    
    // 遍历所有学生，找到当前班级的学生
    Object.keys(studentsData).forEach(studentId => {
        const student = studentsData[studentId];
        if (student.grade === currentGrade && student.class === currentClass) {
            // 确保monthlyHistory对象存在
            if (!student.monthlyHistory) {
                student.monthlyHistory = {};
            }
            
            // 检查是否已经有当前月份的历史记录
            // 如果有，我们需要创建一个新的唯一键来避免覆盖
            let monthKeyToUse = currentMonthKey;
            let counter = 1;
            while (student.monthlyHistory[monthKeyToUse]) {
                monthKeyToUse = `${currentMonthKey}_${counter}`;
                counter++;
            }
            
            // 计算当前月份获得的奖章数
            const currentAwards = calculateMonthlyAwards(student.earnedStamps, student.grade);
            
            // 保存当前月份的完整数据到历史记录中
            student.monthlyHistory[monthKeyToUse] = {
                earnedStamps: [...student.earnedStamps], // 创建副本避免引用问题
                stampDates: { ...student.stampDates },   // 创建副本避免引用问题
                awards: currentAwards,
                resetDate: getCurrentDate()
            };
            
            console.log(`保存学生 ${student.name} 的历史记录:`, student.monthlyHistory[monthKeyToUse]);
            console.log(`学生 ${student.name} 的完整历史记录:`, student.monthlyHistory);
            
            // 清空当前集章状态
            student.earnedStamps = [];
            student.stampDates = {};
            
            resetCount++;
        }
    });
    
    // 保存数据到localStorage
    saveStudentsData();
    // Supabase 云端同步（传入完整的学生数据以保存历史）
    if (Supabase.isEnabled()) {
        Supabase.resetClass(currentGrade, currentClass, studentsData).then(r => {
            if (!r || r.ok !== true) console.warn('Supabase resetClass 失败或跳过', r);
        });
    }
    
    // 显示成功消息
    showNotification(`成功为${getGradeName(currentGrade)}${getClassName(currentClass)}的${resetCount}名学生重置了集章状态！`);
    
    // 更新界面
    renderStamps();
    updateProgress();
}

// 计算月度奖章数
function calculateMonthlyAwards(earnedStamps, studentGrade) {
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    let completedCategories = 0;
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (studentGrade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    categories.forEach(category => {
        const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
        const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
        
        if (categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length) {
            completedCategories++;
        }
    });
    
    return completedCategories;
}

// 获取当前日期（格式化显示）
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// 获取随机日期（模拟数据）
function getRandomDate() {
    const start = new Date(2023, 8, 1); // 2023年9月1日
    const end = new Date(); // 今天
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toLocaleDateString('zh-CN');
}

// 获取随机教师名称（模拟数据）
function getRandomTeacher() {
    const teachers = ['张老师', '李老师', '王老师', '刘老师', '陈老师'];
    return teachers[Math.floor(Math.random() * teachers.length)];
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 处理家长端年级选择变化
function handleParentGradeChange() {
    const parentGrade = parentGradeSelect.value;
    
    // 更新全局变量（用于印章数据显示）
    currentGrade = parentGrade;
    
    // 重置班级和学生选择
    parentClassSelect.value = '';
    currentClass = '';
    currentStudentId = '';
    studentSelect.value = '';
    
    // 更新班级选项
    updateParentClassOptions();
    
    // 更新学生列表（如启用云端则待选班级后拉取）
    if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled()) {
        updateStudentSelectOptions([]);
    } else {
    updateStudentList();
    }
    
    // 重新渲染印章和进度
    renderStamps();
    updateProgress();
    
    // 隐藏历史按钮
    viewHistoryBtn.style.display = 'none';
}

// 更新家长端班级选择框的选项
function updateParentClassOptions() {
    // 清空现有选项
    parentClassSelect.innerHTML = '<option value="">选择班级</option>';
    
    // 定义所有可能的班级（1班到10班）
    const allPossibleClasses = [];
    for (let i = 1; i <= 10; i++) {
        allPossibleClasses.push(`class${i}`);
    }
    
    // 获取已有学生的班级
    const existingClasses = new Set();
    Object.entries(studentsData).forEach(([id, student]) => {
        // 如果选择了年级，只添加该年级下的班级
        if (currentGrade && student.grade !== currentGrade) {
            return;
        }
        existingClasses.add(student.class);
    });
    
    // 添加所有可能的班级选项
    allPossibleClasses.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        
        // 将内部值转换为显示值
        const classNum = className.replace('class', '');
        option.textContent = `${classNum}班`;
        
        // 如果该班级有学生，可以添加特殊样式或标记
        if (existingClasses.has(className)) {
            // 可以在这里添加特殊样式，例如加粗或不同颜色
            option.style.fontWeight = 'bold';
        }
        
        parentClassSelect.appendChild(option);
    });
}

// 处理家长端班级选择变化
function handleParentClassChange() {
    const parentClass = parentClassSelect.value;
    
    // 更新全局变量
    currentClass = parentClass;
    
    // 重置学生选择
    currentStudentId = '';
    studentSelect.value = '';
    
    // 更新学生列表（优先从 Supabase 云端拉取）
    if (Supabase.isEnabled() && currentGrade && currentClass) {
        fetchStudentsFromCloud(currentGrade, currentClass);
    } else if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled() && currentGrade && currentClass) {
        fetchStudentsFromCloud(currentGrade, currentClass);
    } else {
    updateStudentList();
    }
    
    // 重新渲染印章和进度
    renderStamps();
    updateProgress();
    
    // 隐藏历史按钮
    viewHistoryBtn.style.display = 'none';
}

// 处理年级选择变化
function handleGradeChange() {
    currentGrade = gradeSelect.value;
    currentClass = ''; // 重置班级选择
    classSelect.value = '';
    currentStudentId = ''; // 重置学生选择
    studentSelect.value = '';
    
    // 保存年级选择到 localStorage
    if (currentGrade) {
        localStorage.setItem('lastSelectedGrade', currentGrade);
    } else {
        localStorage.removeItem('lastSelectedGrade');
    }
    localStorage.removeItem('lastSelectedClass'); // 清除班级选择
    
    // 更新班级选择框的选项
    updateClassOptions();
    
    // 更新学生列表（如启用云端则清空为待选状态，等选班后拉取）
    if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled()) {
        updateStudentSelectOptions([]);
    } else {
    updateStudentList();
    }
    
    // 重新渲染印章
    renderStamps();
    updateProgress();
}

// 更新班级选择框的选项
function updateClassOptions() {
    // 清空现有选项
    classSelect.innerHTML = '<option value="">选择班级</option>';
    
    // 定义所有可能的班级（1班到10班）
    const allPossibleClasses = [];
    for (let i = 1; i <= 10; i++) {
        allPossibleClasses.push(`class${i}`);
    }
    
    // 获取已有学生的班级
    const existingClasses = new Set();
    Object.entries(studentsData).forEach(([id, student]) => {
        // 如果选择了年级，只添加该年级下的班级
        if (currentGrade && student.grade !== currentGrade) {
            return;
        }
        existingClasses.add(student.class);
    });
    
    // 添加所有可能的班级选项
    allPossibleClasses.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        
        // 将内部值转换为显示值
        const classNum = className.replace('class', '');
        option.textContent = `${classNum}班`;
        
        // 如果该班级有学生，可以添加特殊样式或标记
        if (existingClasses.has(className)) {
            // 可以在这里添加特殊样式，例如加粗或不同颜色
            option.style.fontWeight = 'bold';
        }
        
        classSelect.appendChild(option);
    });
}

// 处理班级选择变化
function handleClassChange() {
    currentClass = classSelect.value;
    currentStudentId = ''; // 重置学生选择
    studentSelect.value = '';
    
    // 保存班级选择到 localStorage
    if (currentClass) {
        localStorage.setItem('lastSelectedClass', currentClass);
    } else {
        localStorage.removeItem('lastSelectedClass');
    }
    
    // 更新学生列表（优先从 Supabase 云端拉取）
    if (Supabase.isEnabled() && currentGrade && currentClass) {
        fetchStudentsFromCloud(currentGrade, currentClass);
    } else if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled() && currentGrade && currentClass) {
        fetchStudentsFromCloud(currentGrade, currentClass);
    } else {
    updateStudentList();
    }
    
    // 重新渲染印章
    renderStamps();
    updateProgress();
}

// 处理Excel上传
function handleExcelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // 检查是否选择了年级和班级
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        event.target.value = ''; // 清空文件选择
        return;
    }
    
    // 添加确认提示 - 告知会清空历史数据
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    const confirmMessage = `确认上传新的学生名单吗？

⚠️ 重要提醒：
上传新名单会清空 ${gradeName}${className} 所有学生的历史集章记录，包括：
• 已获得的所有印章
• 印章获得日期
• 月度历史记录

这个操作适用于新学期开始时重新集章。

是否继续？`;
    
    if (!confirm(confirmMessage)) {
        event.target.value = ''; // 用户取消，清空文件选择
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            // 使用SheetJS解析Excel文件
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            // 获取第一个工作表
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // 将工作表转换为JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            
            // 处理学生数据
            const students = processExcelData(jsonData);
            
            // 更新学生数据
            updateStudentsData(students);
            
            // 清空当前选中的学生（因为学生数据已被重置）
            currentStudentId = '';
            studentSelect.value = '';
            
            // 更新学生列表
            updateStudentList();
            
            // 重新渲染印章和进度
            renderStamps();
            updateProgress();
            
            // 清空文件选择，允许重新上传
            event.target.value = '';
        } catch (error) {
            showNotification('文件解析失败，请检查文件格式！', 'error');
            console.error('Excel解析错误:', error);
            event.target.value = ''; // 清空文件选择
        }
    };
    reader.readAsArrayBuffer(file);
}

// 处理Excel数据
function processExcelData(jsonData) {
    if (!jsonData || !Array.isArray(jsonData) || jsonData.length === 0) {
        showNotification('Excel文件中没有找到有效数据！', 'error');
        return [];
    }
    
    const validStudents = [];
    
    jsonData.forEach((row, index) => {
        // 确保row是一个对象
        if (!row || typeof row !== 'object') {
            console.warn(`第${index + 1}行数据格式不正确，已跳过`);
            return;
        }
        
        // 获取姓名，支持多种可能的列名
        const name = row.姓名 || row.name || row.学生姓名 || row.学生 || row.Name || row['学生姓名'] || row['姓名'];
        
        // 如果没有姓名，跳过这行
        if (!name || String(name).trim() === '') {
            console.warn(`第${index + 1}行没有姓名，已跳过`);
            return;
        }
        
        // 生成唯一ID
        const id = `${currentGrade}_${currentClass}_${index}_${Date.now()}`;
        
        // 使用当前选择的年级和班级
        const student = {
            id: id,
            name: String(name).trim(),
            grade: currentGrade,
            class: currentClass,
            code: generateAccessCode(String(name).trim(), currentGrade, currentClass), // 生成访问码
            earnedStamps: [],
            stampDates: {},
            monthlyHistory: {}
        };
        
        validStudents.push(student);
    });
    
    return validStudents;
}

// 获取年级名称
function getGradeName(gradeValue) {
    const gradeNames = {
        'grade1': '一年级',
        'grade2': '二年级',
        'grade3': '三年级',
        'grade4': '四年级',
        'grade5': '五年级',
        'grade6': '六年级'
    };
    return gradeNames[gradeValue] || gradeValue;
}

// 获取班级名称
function getClassName(classValue) {
    if (!classValue) return '';
    const classNum = classValue.replace('class', '');
    return `${classNum}班`;
}

// 将年级转换为系统内部使用的值
function convertGradeToValue(gradeText) {
    // 检查gradeText是否存在
    if (!gradeText) return 'grade1'; // 默认值
    
    const gradeMap = {
        '一年级': 'grade1',
        '二年级': 'grade2',
        '三年级': 'grade3',
        '四年级': 'grade4',
        '五年级': 'grade5',
        '六年级': 'grade6',
        '1': 'grade1',
        '2': 'grade2',
        '3': 'grade3',
        '4': 'grade4',
        '5': 'grade5',
        '6': 'grade6'
    };
    
    // 确保gradeText是字符串
    const gradeStr = String(gradeText);
    return gradeMap[gradeStr] || 'grade1'; // 如果找不到匹配项，使用默认值
}

// 将班级转换为系统内部使用的值
function convertClassToValue(classText) {
    // 检查classText是否存在
    if (!classText) return 'class1'; // 默认值
    
    // 处理各种班级格式，如"1班"、"班1"、"1"等
    const classNum = String(classText).replace(/[^0-9]/g, '');
    return classNum ? `class${classNum}` : 'class1'; // 如果无法提取数字，使用默认值
}

// 更新学生数据
function updateStudentsData(newStudents) {
    if (!newStudents || newStudents.length === 0) {
        showNotification('没有有效的学生数据！', 'error');
        return;
    }
    
    // 新学期上传名单：先清空当前年级班级的所有学生数据
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    
    // 清空当前年级班级的所有学生数据
    clearClassStudentsData(currentGrade, currentClass);
    
    let newStudentCount = 0;
    
    // 为所有新上传的学生创建全新的记录
    newStudents.forEach(student => {
        // 创建新的学生记录，所有历史数据都重新开始
        studentsData[student.id] = {
            name: student.name,
            grade: student.grade,
            class: student.class,
            code: student.code || generateAccessCode(student.name, student.grade, student.class), // 确保有访问码
            earnedStamps: [], // 重新开始集章
            stampDates: {}, // 重新记录日期
            monthlyHistory: {} // 重新开始历史记录
        };
        newStudentCount++;
    });
    
    // 保存数据到localStorage
    saveStudentsData();
    // Supabase 云端同步：替换该班级学生名单（包含访问码）
    if (Supabase.isEnabled()) {
        const payload = newStudents.map(s => ({ 
            name: s.name, 
            grade: s.grade, 
            class: s.class,
            code: s.code // 确保传递访问码
        }));
        Supabase.uploadStudents(currentGrade, currentClass, payload).then(r => {
            if (!r || r.ok !== true) console.warn('Supabase uploadStudents 失败或跳过', r);
            else console.log('✅ Supabase 上传成功，访问码已同步');
        });
    }
    
    // 显示清空提示
    showNotification(`新学期开始！已为${gradeName}${className}清空所有历史集章记录，重新上传了${newStudentCount}名学生。`);
    
    // 更新班级选项
    updateClassOptions();
}

// 清空指定班级的学生数据
function clearClassStudentsData(grade, className) {
    const studentsToRemove = [];
    
    // 找到需要清空的学生
    Object.keys(studentsData).forEach(studentId => {
        const student = studentsData[studentId];
        if (student.grade === grade && student.class === className) {
            studentsToRemove.push(studentId);
        }
    });
    
    // 删除这些学生的数据
    studentsToRemove.forEach(studentId => {
        delete studentsData[studentId];
    });
    
    // 保存数据到localStorage
    saveStudentsData();
    
    console.log(`已清空${getGradeName(grade)}${getClassName(className)}的${studentsToRemove.length}名学生的历史数据`);
}

// 处理学生搜索
function handleStudentSearch() {
    const searchTerm = studentSearch.value.toLowerCase().trim();
    
    // 获取当前年级和班级筛选后的学生
    let filteredStudents = filterStudentsByGradeAndClass();
    
    // 如果有搜索词，进一步筛选
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => 
            student.name.toLowerCase().includes(searchTerm)
        );
    }
    
    // 更新学生选择下拉框
    updateStudentSelectOptions(filteredStudents);
}

// 根据年级和班级筛选学生
function filterStudentsByGradeAndClass() {
    return Object.entries(studentsData)
        .map(([id, student]) => ({ id, ...student }))
        .filter(student => {
            // 如果选择了年级，只显示该年级的学生
            if (currentGrade && student.grade !== currentGrade) {
                return false;
            }
            // 如果选择了班级，只显示该班级的学生
            if (currentClass && student.class !== currentClass) {
                return false;
            }
            return true;
        });
}

// 更新学生列表
function updateStudentList() {
    // 根据年级和班级筛选学生
    const filteredStudents = filterStudentsByGradeAndClass();
    
    // 更新学生选择下拉框
    updateStudentSelectOptions(filteredStudents);
    
    // 在家长端显示学生数量提示
    if (currentUserType === 'parent' && filteredStudents.length > 0) {
        const gradeName = currentGrade ? getGradeName(currentGrade) : '所有年级';
        const className = currentClass ? getClassName(currentClass) : '所有班级';
        console.log(`${gradeName}${className}共有${filteredStudents.length}名学生`);
    }
}

// 尝试从云端拉取学生，并合并到本地结构
async function fetchStudentsFromCloud(grade, className) {
    try {
        // 优先使用 Supabase
        if (Supabase.isEnabled()) {
            const res = await Supabase.listStudents(grade, className);
            if (res && res.ok && Array.isArray(res.students)) {
                // 先清空该班旧数据
                clearClassStudentsData(grade, className);
                // 按返回数据写入（使用 Supabase 的 id 作为唯一标识）
                res.students.forEach((s) => {
                    // 使用 Supabase 返回的 id，如果没有则使用名字生成
                    const sid = s.id || `${grade}_${className}_${s.created_at}_${s.name}`;
                    studentsData[sid] = {
                        id: sid,
                        name: s.name,
                        grade: s.grade || grade,
                        class: s.class || className,
                        code: s.access_code || s.code || '',
                        earnedStamps: Array.isArray(s.earned_stamps) ? s.earned_stamps : [],
                        stampDates: s.stamp_dates || {},
                        monthlyHistory: s.monthly_history || {}
                    };
                });
                saveStudentsData();
                console.log(`从 Supabase 加载了 ${res.students.length} 名学生，数据:`, studentsData);
            } else {
                console.warn('Supabase 无学生或返回异常，使用本地数据', res);
            }
        } else if (typeof GAS !== 'undefined' && GAS.isEnabled && GAS.isEnabled()) {
            // 备选：使用 GAS
            const res = await GAS.listStudents(grade, className);
            if (res && res.ok && Array.isArray(res.students)) {
                clearClassStudentsData(grade, className);
                res.students.forEach((s, idx) => {
                    const sid = `${grade}_${className}_${idx}_${s.name}`;
                    studentsData[sid] = {
                        name: s.name,
                        grade: grade,
                        class: className,
                        earnedStamps: Array.isArray(s.earnedStamps) ? s.earnedStamps : [],
                        stampDates: s.stampDates || {},
                        monthlyHistory: s.monthlyHistory || {}
                    };
                });
                saveStudentsData();
            } else {
                console.warn('GAS 无学生或返回异常，使用本地数据', res);
            }
        } else {
            updateStudentList();
            return;
        }
    } catch (e) {
        console.warn('从云端获取学生失败，使用本地数据', e);
    }
    updateStudentList();
    renderStamps();
    updateProgress();
}

// 更新学生选择下拉框选项
function updateStudentSelectOptions(students) {
    // 清空现有选项
    studentSelect.innerHTML = '<option value="">选择学生</option>';
    
    // 添加筛选后的学生选项
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        // 显示学生姓名和所在班级
        const gradeName = getGradeName(student.grade);
        const className = getClassName(student.class);
        option.textContent = `${student.name} (${gradeName}${className})`;
        studentSelect.appendChild(option);
    });
    
    // 如果当前选择的学生不在筛选结果中，清空选择
    if (currentStudentId && !students.find(s => s.id === currentStudentId)) {
        currentStudentId = '';
        studentSelect.value = '';
    }
    
    // 更新访问码显示
    updateAccessCodeDisplay();
}

// 更新访问码显示
function updateAccessCodeDisplay() {
    // 查找或创建访问码显示区域
    let accessCodeDisplay = document.getElementById('accessCodeDisplay');
    
    if (currentUserType === 'teacher' && currentStudentId) {
        const student = studentsData[currentStudentId];
        if (student && student.code) {
            if (!accessCodeDisplay) {
                accessCodeDisplay = document.createElement('div');
                accessCodeDisplay.id = 'accessCodeDisplay';
                accessCodeDisplay.style.cssText = 'padding: 12px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; margin: 15px 0; text-align: center;';
                
                // 插入到进度区域之前
                const progressSection = document.querySelector('.progress-section');
                if (progressSection && progressSection.parentNode) {
                    progressSection.parentNode.insertBefore(accessCodeDisplay, progressSection);
                }
            }
            
            accessCodeDisplay.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <i class="fas fa-key" style="color: #ff9800;"></i>
                    <span style="font-weight: bold; color: #333;">家长访问码：</span>
                    <code style="font-size: 18px; font-weight: bold; color: #d32f2f; background: white; padding: 5px 15px; border-radius: 4px; letter-spacing: 2px;">${student.code}</code>
                    <button onclick="copyAccessCode('${student.code}')" class="btn btn-sm" style="padding: 5px 10px; font-size: 12px;" title="复制访问码">
                        <i class="fas fa-copy"></i> 复制
                    </button>
                </div>
                <small style="color: #666; display: block; margin-top: 5px;">请将此访问码分享给${student.name}家长，用于查看集章进度</small>
            `;
            accessCodeDisplay.style.display = 'block';
        }
    } else {
        // 非教师端或未选择学生时隐藏
        if (accessCodeDisplay) {
            accessCodeDisplay.style.display = 'none';
        }
    }
}

// 复制访问码到剪贴板（全局函数）
window.copyAccessCode = function(code) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => {
            showNotification(`访问码 ${code} 已复制到剪贴板！`);
        }).catch(err => {
            console.error('复制失败:', err);
            fallbackCopyAccessCode(code);
        });
    } else {
        fallbackCopyAccessCode(code);
    }
};

// 备用复制方法
function fallbackCopyAccessCode(code) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showNotification(`访问码 ${code} 已复制到剪贴板！`);
    } catch (err) {
        showNotification('复制失败，请手动复制访问码', 'error');
    }
    document.body.removeChild(textarea);
}

// ========== 登录相关功能 ==========

// 显示教师登录模态框
function showTeacherLoginModal() {
    if (teacherLoginModal) {
        teacherLoginModal.style.display = 'flex';
        // 清空密码输入框
        if (teacherPasswordInput) {
            teacherPasswordInput.value = '';
            teacherPasswordInput.focus();
        }
        // 隐藏错误消息
        if (loginError) {
            loginError.style.display = 'none';
        }
    }
}

// 隐藏教师登录模态框
function hideTeacherLoginModal() {
    if (teacherLoginModal) {
        teacherLoginModal.style.display = 'none';
    }
}

// 设置登录相关事件监听器
function setupLoginEventListeners() {
    // 登录按钮事件
    if (loginBtn) {
        loginBtn.addEventListener('click', handleTeacherLogin);
    }
    
    // 密码输入框回车事件
    if (teacherPasswordInput) {
        teacherPasswordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleTeacherLogin();
            }
        });
    }
    
    // 切换到家长端按钮事件
    if (switchToParentBtn) {
        switchToParentBtn.addEventListener('click', switchToParent);
    }
    
    // 家长访问码验证事件
    if (verifyAccessCodeBtn) {
        verifyAccessCodeBtn.addEventListener('click', handleParentAccessCodeVerify);
    }
    
    if (parentAccessCodeInput) {
        parentAccessCodeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleParentAccessCodeVerify();
            }
        });
    }
    
    if (cancelParentAccessBtn) {
        cancelParentAccessBtn.addEventListener('click', () => {
            parentAccessModal.style.display = 'none';
            parentAccessCodeInput.value = '';
            accessCodeError.style.display = 'none';
            accessCodeSuccess.style.display = 'none';
        });
    }
}

// 处理教师登录
function handleTeacherLogin() {
    if (!teacherPasswordInput) {
        showNotification('登录界面未正确加载！', 'error');
        return;
    }
    
    const password = teacherPasswordInput.value.trim();
    
    if (password === '') {
        showLoginError('请输入密码');
        return;
    }
    
    if (password === TEACHER_PASSWORD) {
        // 密码正确，登录成功
        isTeacherLoggedIn = true;
        hideTeacherLoginModal();
        
        // 初始化主界面
        initializeMainInterface();
        
        // 设置为教师端
        currentUserType = 'teacher';
        switchUserType('teacher');
        
        showNotification('登录成功！欢迎使用教师端！');
    } else {
        // 密码错误
        showLoginError('密码错误');
        // 清空密码输入框
        teacherPasswordInput.value = '';
        teacherPasswordInput.focus();
    }
}

// 显示登录错误信息
function showLoginError(message) {
    if (loginError) {
        loginError.textContent = message;
        loginError.style.display = 'block';
        
        // 3秒后自动隐藏
        setTimeout(() => {
            loginError.style.display = 'none';
        }, 3000);
    }
}

// 切换到家长端
function switchToParent() {
    // 隐藏登录模态框
    hideTeacherLoginModal();
    
    // 初始化主界面
    initializeMainInterface();
    
    // 设置为家长端
    currentUserType = 'parent';
    switchUserType('parent');
    
    // 显示访问码验证模态框
    showParentAccessModal();
}

// 显示家长访问码验证模态框
function showParentAccessModal() {
    if (parentAccessModal) {
        parentAccessModal.style.display = 'flex';
        parentAccessCodeInput.value = '';
        accessCodeError.style.display = 'none';
        accessCodeSuccess.style.display = 'none';
        parentAccessCodeInput.focus();
    }
}

// 处理家长访问码验证
async function handleParentAccessCodeVerify() {
    const accessCode = parentAccessCodeInput.value.trim().toUpperCase();
    
    if (!accessCode) {
        accessCodeError.textContent = '请输入访问码';
        accessCodeError.style.display = 'block';
        accessCodeSuccess.style.display = 'none';
        return;
    }
    
    if (accessCode.length !== 6) {
        accessCodeError.textContent = '访问码必须是6位';
        accessCodeError.style.display = 'block';
        accessCodeSuccess.style.display = 'none';
        return;
    }
    
    // 从 Supabase 或本地查找匹配的学生
    let foundStudent = null;
    let foundStudentId = null;
    
    // 优先从 Supabase 查询
    if (Supabase.isEnabled()) {
        try {
            const res = await Supabase.findStudentByAccessCode(accessCode);
            if (res && res.ok && res.student) {
                foundStudent = res.student;
                foundStudentId = res.student.id;
                
                // 同步到本地 studentsData
                const sid = foundStudent.id || `${foundStudent.grade}_${foundStudent.class}_${foundStudent.created_at}_${foundStudent.name}`;
                studentsData[sid] = {
                    id: sid,
                    name: foundStudent.name,
                    grade: foundStudent.grade,
                    class: foundStudent.class,
                    code: foundStudent.access_code || foundStudent.code,
                    earnedStamps: Array.isArray(foundStudent.earned_stamps) ? foundStudent.earned_stamps : [],
                    stampDates: foundStudent.stamp_dates || {},
                    monthlyHistory: foundStudent.monthly_history || {}
                };
                foundStudentId = sid;
                saveStudentsData();
            }
        } catch (e) {
            console.warn('从 Supabase 查询学生失败:', e);
        }
    }
    
    // 如果 Supabase 没找到，从本地查找
    if (!foundStudent) {
        for (const [studentId, student] of Object.entries(studentsData)) {
            if (student.code && student.code.toUpperCase() === accessCode) {
                foundStudent = student;
                foundStudentId = studentId;
                break;
            }
        }
    }
    
    if (!foundStudent) {
        accessCodeError.textContent = '访问码错误或学生不存在';
        accessCodeError.style.display = 'block';
        accessCodeSuccess.style.display = 'none';
        return;
    }
    
    // 验证成功
    accessCodeError.style.display = 'none';
    accessCodeSuccess.textContent = `验证成功！欢迎${foundStudent.name}家长`;
    accessCodeSuccess.style.display = 'block';
    
    // 保存验证信息
    parentVerifiedStudentId = foundStudentId;
    isParentVerified = true;
    currentGrade = foundStudent.grade;
    currentClass = foundStudent.class;
    currentStudentId = foundStudentId;
    
    // 保存到 localStorage
    localStorage.setItem('parentVerifiedStudentId', foundStudentId);
    localStorage.setItem('isParentVerified', 'true');
    
    // 延迟关闭模态框并更新界面
    setTimeout(async () => {
        parentAccessModal.style.display = 'none';
        
        // 从 Supabase 重新加载最新数据
        if (Supabase.isEnabled()) {
            console.log('🔄 家长端：从 Supabase 重新加载最新数据...');
            const res = await Supabase.findStudentByAccessCode(accessCode);
            if (res && res.ok && res.student) {
                // 更新本地数据为最新
                studentsData[foundStudentId] = {
                    id: foundStudentId,
                    name: res.student.name,
                    grade: res.student.grade,
                    class: res.student.class,
                    code: res.student.access_code || res.student.code,
                    earnedStamps: Array.isArray(res.student.earned_stamps) ? res.student.earned_stamps : [],
                    stampDates: res.student.stamp_dates || {},
                    monthlyHistory: res.student.monthly_history || {}
                };
                saveStudentsData();
                console.log(`✅ 已加载最新数据，当前印章数：${res.student.earned_stamps?.length || 0}`);
            }
        }
        
        updateParentUI();
        showNotification(`欢迎${foundStudent.name}家长！`);
    }, 1000);
}

// 更新家长端UI
function updateParentUI() {
    if (!isParentVerified || !parentVerifiedStudentId) {
        return;
    }
    
    const student = studentsData[parentVerifiedStudentId];
    if (!student) {
        showNotification('学生数据加载失败', 'error');
        return;
    }
    
    // 隐藏年级班级选择（家长只能看自己孩子）
    if (parentControls) {
        parentControls.style.display = 'none';
    }
    
    // 隐藏学生搜索和选择（自动选中验证的学生）
    if (studentSearch) {
        studentSearch.style.display = 'none';
    }
    if (studentSelect) {
        studentSelect.style.display = 'none';
    }
    
    // 显示欢迎信息和刷新按钮
    const welcomeMsg = document.createElement('div');
    welcomeMsg.id = 'parentWelcome';
    welcomeMsg.style.cssText = 'padding: 15px; background: #e3f2fd; border-radius: 8px; margin-bottom: 20px; text-align: center;';
    welcomeMsg.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 5px 0; color: #1976d2;">欢迎 ${student.name} 家长</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">${getGradeName(student.grade)} ${getClassName(student.class)}</p>
            </div>
            <button onclick="refreshParentData()" class="btn btn-primary" style="margin: 0; padding: 8px 16px;" title="从云端获取最新数据">
                <i class="fas fa-sync-alt"></i> 刷新数据
            </button>
        </div>
    `;
    
    // 插入欢迎信息（如果不存在）
    if (!document.getElementById('parentWelcome')) {
        const container = document.querySelector('.container');
        const header = container.querySelector('.header');
        if (header && header.nextSibling) {
            container.insertBefore(welcomeMsg, header.nextSibling);
        }
    } else {
        // 更新已存在的欢迎信息
        document.getElementById('parentWelcome').innerHTML = welcomeMsg.innerHTML;
    }
    
    // 更新界面
    renderStamps();
    updateProgress();
}

// 刷新家长端数据（全局函数）
window.refreshParentData = async function() {
    if (!isParentVerified || !parentVerifiedStudentId) {
        showNotification('请先验证访问码', 'error');
        return;
    }
    
    const student = studentsData[parentVerifiedStudentId];
    if (!student || !student.code) {
        showNotification('无法获取学生信息', 'error');
        return;
    }
    
    showNotification('正在从云端获取最新数据...');
    
    if (Supabase.isEnabled()) {
        try {
            const res = await Supabase.findStudentByAccessCode(student.code);
            if (res && res.ok && res.student) {
                // 更新本地数据为最新
                studentsData[parentVerifiedStudentId] = {
                    id: parentVerifiedStudentId,
                    name: res.student.name,
                    grade: res.student.grade,
                    class: res.student.class,
                    code: res.student.access_code || res.student.code,
                    earnedStamps: Array.isArray(res.student.earned_stamps) ? res.student.earned_stamps : [],
                    stampDates: res.student.stamp_dates || {},
                    monthlyHistory: res.student.monthly_history || {}
                };
                saveStudentsData();
                
                // 刷新界面
                renderStamps();
                updateProgress();
                
                showNotification(`✅ 数据已更新！当前已获得 ${res.student.earned_stamps?.length || 0} 个印章`);
                console.log(`✅ 刷新成功，当前印章:`, res.student.earned_stamps);
            } else {
                showNotification('无法从云端获取数据', 'error');
            }
        } catch (e) {
            console.error('刷新数据失败:', e);
            showNotification('刷新失败，请稍后重试', 'error');
        }
    } else {
        showNotification('云端同步未启用', 'warning');
    }
};

// 初始化主界面
async function initializeMainInterface() {
    // 从localStorage加载学生数据
    loadStudentsData();
    
    // 恢复上次选择的年级和班级
    const lastGrade = localStorage.getItem('lastSelectedGrade');
    const lastClass = localStorage.getItem('lastSelectedClass');
    
    if (lastGrade) {
        currentGrade = lastGrade;
        if (gradeSelect) {
            gradeSelect.value = lastGrade;
        }
    }
    
    if (lastClass && lastGrade) {
        currentClass = lastClass;
        if (classSelect) {
            classSelect.value = lastClass;
        }
    }
    
    // 如果已选择年级和班级，且启用了 Supabase，从云端加载数据
    if (currentGrade && currentClass && Supabase.isEnabled()) {
        console.log('从 Supabase 加载学生数据...', currentGrade, currentClass);
        await fetchStudentsFromCloud(currentGrade, currentClass);
    }
    
    // 初始化界面
    updateUIForUserType();
    
    // 初始化班级选项（教师端/家长端）
    if (currentUserType === 'teacher') {
        updateClassOptions();
        // 恢复班级选择（在选项更新后）
        if (currentClass && classSelect) {
            classSelect.value = currentClass;
        }
    } else {
        updateParentClassOptions();
    }
    
    // 渲染印章网格
    renderStamps();
    
    // 初始化进度显示
    updateProgress();
    
    // 更新月份显示
    updateCurrentMonth();
}

// ========== 导出统计表功能 ==========

// 处理导出统计表
// 导出访问码表
function handleExportAccessCodes() {
    console.log('导出访问码表按钮被点击了！');
    
    // 检查是否选择了年级和班级
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    // 获取当前班级的所有学生
    const classStudents = getClassStudents();
    
    if (classStudents.length === 0) {
        showNotification('当前班级没有学生数据！', 'error');
        return;
    }
    
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    showNotification(`正在为${gradeName}${className}生成访问码表...`);
    
    try {
        // 检查XLSX库是否可用
        if (typeof XLSX === 'undefined') {
            throw new Error('Excel库未正确加载，请刷新页面重试');
        }
        
        // 生成访问码数据
        const accessCodeData = [];
        
        // 添加表头
        accessCodeData.push([
            '序号',
            '学生姓名',
            '年级',
            '班级',
            '家长访问码',
            '使用说明'
        ]);
        
        // 添加学生数据
        classStudents.forEach((student, index) => {
            accessCodeData.push([
                index + 1,
                student.name,
                gradeName,
                className,
                student.code || '未生成',
                '家长使用此访问码登录家长端查看孩子集章进度'
            ]);
        });
        
        // 创建工作簿
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(accessCodeData);
        
        // 设置列宽
        ws['!cols'] = [
            { wch: 6 },   // 序号
            { wch: 12 },  // 学生姓名
            { wch: 10 },  // 年级
            { wch: 8 },   // 班级
            { wch: 15 },  // 家长访问码
            { wch: 40 }   // 使用说明
        ];
        
        // 设置表头样式（加粗）
        const headerStyle = {
            font: { bold: true },
            alignment: { horizontal: 'center', vertical: 'center' },
            fill: { fgColor: { rgb: 'FFE0B2' } }
        };
        
        // 应用表头样式
        ['A1', 'B1', 'C1', 'D1', 'E1', 'F1'].forEach(cell => {
            if (ws[cell]) {
                ws[cell].s = headerStyle;
            }
        });
        
        // 添加工作表到工作簿
        XLSX.utils.book_append_sheet(wb, ws, '家长访问码');
        
        // 添加使用说明工作表
        const instructions = [
            ['家长访问码使用说明'],
            [''],
            ['1. 打开集章系统网址：https://bangyangzhixing.zeabur.app'],
            ['2. 点击页面顶部的"家长端"按钮'],
            ['3. 输入您孩子的6位访问码'],
            ['4. 点击"验证"按钮'],
            ['5. 验证成功后即可查看孩子的集章进度'],
            [''],
            ['注意事项：'],
            ['- 每个学生有唯一的访问码，请妥善保管'],
            ['- 访问码区分大小写，请准确输入'],
            ['- 如访问码遗失，请联系老师重新获取'],
            ['- 家长端仅可查看，不能修改集章数据'],
            [''],
            [`导出时间：${new Date().toLocaleString('zh-CN')}`],
            [`导出班级：${gradeName}${className}`],
            [`学生人数：${classStudents.length}人`]
        ];
        
        const wsInstructions = XLSX.utils.aoa_to_sheet(instructions);
        wsInstructions['!cols'] = [{ wch: 60 }];
        XLSX.utils.book_append_sheet(wb, wsInstructions, '使用说明');
        
        // 生成文件名
        const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const filename = `${gradeName}${className}_家长访问码_${timestamp}.xlsx`;
        
        // 下载文件
        XLSX.writeFile(wb, filename);
        
        showNotification(`访问码表导出成功！共${classStudents.length}名学生`);
        
    } catch (error) {
        console.error('导出访问码表失败:', error);
        showNotification(`导出失败：${error.message}`, 'error');
    }
}

function handleExportStats() {
    console.log('导出统计表按钮被点击了！');
    
    // 检查是否选择了年级和班级
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    // 获取当前班级的所有学生
    const classStudents = getClassStudents();
    
    if (classStudents.length === 0) {
        showNotification('当前班级没有学生数据！', 'error');
        return;
    }
    
    // 显示处理提示
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    showNotification(`正在为${gradeName}${className}生成学期集章统计表...`);
    
    try {
        // 检查XLSX库是否可用
        if (typeof XLSX === 'undefined') {
            throw new Error('Excel库未正确加载，请刷新页面重试');
        }
        
        // 在导出前确保数据已保存
        saveStudentsData();
        
        // 生成并下载Excel文件
        generateExcelReport(classStudents);
        showNotification(`${gradeName}${className}学期集章统计表导出成功！`);
    } catch (error) {
        console.error('导出统计表时出错:', error);
        showNotification(`导出失败：${error.message}`, 'error');
    }
}

// 生成Excel报告
function generateExcelReport(students) {
    console.log('开始生成Excel报告，学生数量:', students.length);
    
    const workbook = XLSX.utils.book_new();
    
    // 为每个学生生成一个工作表
    students.forEach((student, index) => {
        console.log(`正在处理学生 ${index + 1}/${students.length}: ${student.name}`);
        const worksheetData = generateStudentData(student);
        console.log(`学生 ${student.name} 的数据行数:`, worksheetData.length);
        console.log(`学生 ${student.name} 的完整数据:`, worksheetData);
        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
        
        // 添加单元格合并设置
        const merges = generateMergeRanges(student, worksheetData);
        if (merges.length > 0) {
            worksheet['!merges'] = merges;
        }
        
        // 设置列宽（动态根据月份数量）
        const colWidths = [
            {wch: 15}, // 教育目标列
            {wch: 50}  // 评价细则列（较宽以容纳详细内容）
        ];
        
        // 根据实际月份数量添加月份列宽（每个月份有两列：月份列 + 奖章列）
        const monthlyHistory = student.monthlyHistory || {};
        const currentEarnedStamps = student.earnedStamps || [];
        const currentStampDates = student.stampDates || {};
        let monthCount = Object.keys(monthlyHistory).length;
        
        // 如果有当前数据但没有历史记录，添加当前月份
        if ((currentEarnedStamps.length > 0 || Object.keys(currentStampDates).length > 0) && monthCount === 0) {
            monthCount = 1;
        }
        
        // 每个月份需要两列：月份列 + 奖章列
        for (let i = 0; i < monthCount; i++) {
            colWidths.push({wch: 15}); // 月份列（宽一点以容纳日期）
            colWidths.push({wch: 12}); // 奖章列
        }
        
        worksheet['!cols'] = colWidths;
        
        // 移除固定行高设置，让Excel根据内容自动调整行高
        // 这样可以支持单元格内容自动换行显示
        
        // 工作表名称（去除可能导致问题的特殊字符）
        const sheetName = `${student.name}_集章统计`.replace(/[\\\/\[\]\*\?:]/g, '_');
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    });
    
    // 生成文件名
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    const currentDate = new Date().toLocaleDateString('zh-CN').replace(/\//g, '-');
    const filename = `${gradeName}${className}_学期集章统计表_${currentDate}.xlsx`;
    
    // 导出文件
    try {
        XLSX.writeFile(workbook, filename);
    } catch (writeError) {
        console.error('XLSX.writeFile 失败，尝试备用方法:', writeError);
        // 备用导出方法
        const wbout = XLSX.write(workbook, {bookType:'xlsx', type:'array'});
        const blob = new Blob([wbout], {type: 'application/octet-stream'});
        
        // 创建下载链接
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// 生成单个学生的数据（按照用户提供的表格模板格式）
function generateStudentData(student) {
    const data = [];
    
    console.log(`生成学生 ${student.name} 的数据`);
    console.log('学生完整数据:', JSON.parse(JSON.stringify(student))); // 深拷贝以避免循环引用问题
    
    // 根据学生年级选择印章数据
    const currentStampsData = student.grade === 'grade2' ? grade2StampsData : stampsData;
    
    // 获取学生的月度历史记录和当前数据
    const monthlyHistory = student.monthlyHistory || {};
    const currentEarnedStamps = student.earnedStamps || [];
    const currentStampDates = student.stampDates || {};
    
    console.log('月度历史记录:', monthlyHistory);
    console.log('当前获得的印章:', currentEarnedStamps);
    console.log('当前印章日期:', currentStampDates);
    
    // 如果有当前数据但没有历史记录，创建当前月份的记录
    const currentMonthKey = getCurrentMonthKey();
    let allMonthsData = { ...monthlyHistory };
    
    // 始终添加当前月份到导出表格中（即使当前月份没有数据，也要显示空列）
    // 如果当前月份已在历史记录中（说明已经重置过），需要创建新的键以避免覆盖历史数据
    let currentMonthKeyToUse = currentMonthKey;
    if (allMonthsData[currentMonthKey]) {
        // 当前月份已在历史记录中，找一个新的唯一键
        let counter = 1;
        while (allMonthsData[`${currentMonthKey}_${counter}`]) {
            counter++;
        }
        currentMonthKeyToUse = `${currentMonthKey}_${counter}`;
        console.log(`当前月份 ${currentMonthKey} 已在历史记录中，使用新键 ${currentMonthKeyToUse}`);
    }
    
    // 添加当前月份数据（可能为空，如果刚重置）
    allMonthsData[currentMonthKeyToUse] = {
            earnedStamps: [...currentEarnedStamps], // 创建副本避免修改原数据
            stampDates: {...currentStampDates}, // 创建副本避免修改原数据
            awards: calculateMonthlyAwards(currentEarnedStamps, student.grade)
        };
    console.log(`添加当前月份数据到 ${currentMonthKeyToUse}`);
    console.log(`当前月份数据:`, allMonthsData[currentMonthKeyToUse]);
    
    // 对月份进行正确排序，处理带下划线的月份（如 2023-10_1）
    const months = Object.keys(allMonthsData).sort((a, b) => {
        // 提取基础月份键（去掉可能的下划线部分）
        const baseA = a.split('_')[0];
        const baseB = b.split('_')[0];
        
        // 转换为日期对象进行比较
        const [yearA, monthA] = baseA.split('-');
        const [yearB, monthB] = baseB.split('-');
        
        const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1);
        const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1);
        
        return dateA - dateB;
    });
    
    console.log('完整月度数据:', allMonthsData);
    console.log('所有月份列表（已排序）:', months);
    console.log('当前月份数据:', {
        currentEarnedStamps,
        currentStampDates,
        currentMonthKey
    });
    
    // 判断是否为榜样之星
    const isModelStar = checkIfModelStar(student);
    console.log(`学生 ${student.name} 榜样之星判定结果: ${isModelStar}`);
    
    // 标题行
    const gradeName = getGradeName(student.grade);
    const className = getClassName(student.class);
    data.push([
        `班级：${gradeName}${className}`,
        '',
        `姓名：${student.name}`,
        '',
        '',
        '',
        '',
        `是否评课为"榜样之星"（${isModelStar ? '是' : '否'}）`,
        ''
    ]);
    
    // 空行
    data.push(['', '', '', '', '', '', '', '', '']);
    
    // 表头行
    const headerRow = ['教育目标', '评价细则、要求、标准'];
    // 添加动态月份列和对应的奖章列
    if (months.length > 0) {
        months.forEach(monthKey => {
            // 提取基础月份键用于显示（处理带下划线的键如 "2025-10_1"）
            const baseMonthKey = monthKey.split('_')[0];
            const [year, month] = baseMonthKey.split('-');
            // 直接使用提取出的月份号，不依赖当前系统日期
            const monthNum = parseInt(month);
            headerRow.push(`（${monthNum}）月`);
            headerRow.push('是否获得奖章');
        });
    } else {
        // 即使没有历史记录，也要添加当前月份列
        const now = new Date();
        headerRow.push(`（${now.getMonth() + 1}）月`);
        headerRow.push('是否获得奖章');
    }
    data.push(headerRow);
    
    // 按类别组织数据
    const categoryData = [
        {
            name: '学习榜样',
            category: 'study',
            rules: currentStampsData.filter(stamp => stamp.category === 'study')
        },
        {
            name: '文明榜样',
            category: 'behavior',
            rules: currentStampsData.filter(stamp => stamp.category === 'behavior')
        },
        {
            name: '纪律榜样',
            category: 'teamwork',
            rules: currentStampsData.filter(stamp => stamp.category === 'teamwork')
        },
        {
            name: '劳动榜样',
            category: 'responsibility',
            rules: currentStampsData.filter(stamp => stamp.category === 'responsibility')
        },
        {
            name: '团结榜样',
            category: 'unity',
            rules: currentStampsData.filter(stamp => stamp.category === 'unity')
        },
        {
            name: '诚信榜样',
            category: 'honesty',
            rules: currentStampsData.filter(stamp => stamp.category === 'honesty')
        },
        {
            name: '习惯榜样',
            category: 'habit',
            rules: currentStampsData.filter(stamp => stamp.category === 'habit')
        },

    ];
    
    // 生成每个类别的数据行
    categoryData.forEach(categoryInfo => {
        if (categoryInfo.rules.length === 0) return;
        
        // 检查该类别是否在所有月份都完成了所有细则
        const categoryCompletionByMonth = {};
        let hasAnyCompletion = false;
        
        if (months.length > 0) {
            months.forEach(monthKey => {
                const monthData = allMonthsData[monthKey];
                const earnedStamps = monthData ? monthData.earnedStamps || [] : [];
                const completedRulesInCategory = categoryInfo.rules.filter(rule => earnedStamps.includes(rule.id));
                categoryCompletionByMonth[monthKey] = completedRulesInCategory.length === categoryInfo.rules.length;
                if (completedRulesInCategory.length > 0) {
                    hasAnyCompletion = true;
                }
            });
        } else {
            // 如果没有历史记录，检查当前数据
            const completedRulesInCategory = categoryInfo.rules.filter(rule => currentEarnedStamps.includes(rule.id));
            categoryCompletionByMonth[currentMonthKey] = completedRulesInCategory.length === categoryInfo.rules.length;
            if (completedRulesInCategory.length > 0) {
                hasAnyCompletion = true;
            }
        }
        
        categoryInfo.rules.forEach((rule, index) => {
            const row = [];
            
            // 第一列：类别名称（只在第一行显示）
            if (index === 0) {
                row.push(categoryInfo.name);
            } else {
                row.push('');
            }
            
            // 第二列：评价细则
            row.push(`${index + 1}. ${rule.description}`);
            
            // 月份列：显示完成情况和日期，以及对应的奖章列
            if (months.length > 0) {
                months.forEach(monthKey => {
                    const monthData = allMonthsData[monthKey];
                    const earnedStamps = monthData ? monthData.earnedStamps || [] : [];
                    const isCompleted = earnedStamps.includes(rule.id);
                    
                    console.log(`检查规则 ${rule.id} (${rule.name}) 在月份 ${monthKey}:`, {
                        isCompleted,
                        earnedStamps,
                        stampDates: monthData ? monthData.stampDates : null
                    });
                    
                    // 月份列：显示完成情况
                    if (isCompleted) {
                        // 显示完成日期
                        const completionDate = monthData.stampDates && monthData.stampDates[rule.id] 
                            ? monthData.stampDates[rule.id] 
                            : '✓已完成';
                        row.push(completionDate);
                        console.log(`规则已完成，显示日期: ${completionDate}`);
                    } else {
                        // 未完成显示"×"
                        row.push('×');
                        console.log(`规则未完成，显示×`);
                    }
                    
                    // 奖章列：只在该类别第一行且该月份完成所有细则时显示
                    if (index === 0 && categoryCompletionByMonth[monthKey]) {
                        row.push('已获得');
                        console.log(`类别 ${categoryInfo.name} 在 ${monthKey} 获得奖章`);
                    } else {
                        row.push('');
                    }
                });
            } else {
                // 如果没有历史记录，检查当前数据
                const isCompleted = currentEarnedStamps.includes(rule.id);
                
                // 月份列：显示完成情况
                if (isCompleted) {
                    // 显示完成日期
                    const completionDate = currentStampDates[rule.id] || '✓已完成';
                    row.push(completionDate);
                } else {
                    // 未完成显示"×"
                    row.push('×');
                }
                
                // 奖章列：检查当前月份是否完成所有细则
                if (index === 0 && categoryCompletionByMonth[currentMonthKey]) {
                    row.push('已获得');
                } else {
                    row.push('');
                }
            }
            
            data.push(row);
        });
    });
    
    console.log(`学生 ${student.name} 生成的完整数据:`, data);
    return data;
}

// 生成合并单元格的范围
function generateMergeRanges(student, worksheetData) {
    const merges = [];
    
    // 根据学生年级选择印章数据
    const currentStampsData = student.grade === 'grade2' ? grade2StampsData : stampsData;
    
    // 获取学生的完整月度数据
    const monthlyHistory = student.monthlyHistory || {};
    const currentEarnedStamps = student.earnedStamps || [];
    const currentStampDates = student.stampDates || {};
    const currentMonthKey = getCurrentMonthKey();
    let allMonthsData = { ...monthlyHistory };
    
    // 始终添加当前月份到导出表格中（即使当前月份没有数据，也要显示空列）
    // 如果当前月份已在历史记录中（说明已经重置过），需要创建新的键以避免覆盖历史数据
    let currentMonthKeyToUse = currentMonthKey;
    if (allMonthsData[currentMonthKey]) {
        let counter = 1;
        while (allMonthsData[`${currentMonthKey}_${counter}`]) {
            counter++;
        }
        currentMonthKeyToUse = `${currentMonthKey}_${counter}`;
    }
    
    allMonthsData[currentMonthKeyToUse] = {
            earnedStamps: currentEarnedStamps,
            stampDates: currentStampDates,
            awards: calculateMonthlyAwards(currentEarnedStamps, student.grade)
        };
    
    const months = Object.keys(allMonthsData).sort();
    
    if (months.length === 0) return merges;
    
    // 按类别组织数据
    const categoryData = [
        { name: '学习榜样', category: 'study', rules: currentStampsData.filter(stamp => stamp.category === 'study') },
        { name: '文明榜样', category: 'behavior', rules: currentStampsData.filter(stamp => stamp.category === 'behavior') },
        { name: '纪律榜样', category: 'teamwork', rules: currentStampsData.filter(stamp => stamp.category === 'teamwork') },
        { name: '劳动榜样', category: 'responsibility', rules: currentStampsData.filter(stamp => stamp.category === 'responsibility') },
        { name: '团结榜样', category: 'unity', rules: currentStampsData.filter(stamp => stamp.category === 'unity') },
        { name: '诚信榜样', category: 'honesty', rules: currentStampsData.filter(stamp => stamp.category === 'honesty') },
        { name: '习惯榜样', category: 'habit', rules: currentStampsData.filter(stamp => stamp.category === 'habit') }
    ];
    
    // 计算数据开始行（标题行 + 空行 + 表头行 = 3行，所以数据从第4行开始，索引为3）
    let currentRow = 3;
    
    // 为每个类别计算合并范围
    categoryData.forEach(categoryInfo => {
        if (categoryInfo.rules.length === 0) return;
        
        const categoryStartRow = currentRow;
        const categoryEndRow = currentRow + categoryInfo.rules.length - 1;
        
        // 为每个月份的"是否获得奖章"列创建合并范围
        months.forEach((monthKey, monthIndex) => {
            // 奖章列的位置：第一列是教育目标，第二列是评价细则，然后是交替的月份列和奖章列
            // 所以奖章列位置是：2 + monthIndex * 2 + 1 = 3 + monthIndex * 2
            const medalColumnIndex = 3 + monthIndex * 2;
            
            // 检查该类别在这个月份是否完成
            const monthData = allMonthsData[monthKey];
            const earnedStamps = monthData ? monthData.earnedStamps || [] : [];
            const completedRulesInCategory = categoryInfo.rules.filter(rule => earnedStamps.includes(rule.id));
            const isCompleted = completedRulesInCategory.length === categoryInfo.rules.length;
            
            // 所有有多个细则的类别都进行合并单元格（无论是否完成）
            if (categoryInfo.rules.length > 1) {
                merges.push({
                    s: { r: categoryStartRow, c: medalColumnIndex },  // 开始位置
                    e: { r: categoryEndRow, c: medalColumnIndex }     // 结束位置
                });
            }
        });
        
        currentRow += categoryInfo.rules.length;
    });
    
    console.log('生成的合并范围:', merges);
    return merges;
}

// 获取某月某类别的完成结果
function getCategoryResultForMonth(monthData, category, stampsData) {
    const categoryStamps = stampsData.filter(stamp => stamp.category === category);
    const earnedStamps = monthData.earnedStamps || [];
    
    if (categoryStamps.length === 0) return '无此类别';
    
    // 检查该类别是否全部完成
    const completedStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
    const isCompleted = completedStamps.length === categoryStamps.length;
    
    if (isCompleted) {
        return '已获得🏅';
    }
    
    // 计算完成情况
    const completedCount = completedStamps.length;
    const totalCount = categoryStamps.length;
    
    // 如果有部分完成，显示进度
    if (completedCount > 0) {
        return `${completedCount}/${totalCount} 项完成`;
    } else {
        return '未开始';
    }
}

// 判断学生是否为榜样之星（新的评定标准）
function isModelStar(student) {
    const monthlyHistory = student.monthlyHistory || {};
    const months = Object.keys(monthlyHistory);
    
    // 统计每月获得5枚或以上奖章的月份数
    let qualifiedMonths = 0;
    months.forEach(monthKey => {
        const monthData = monthlyHistory[monthKey];
        if (monthData.awards >= 5) {
            qualifiedMonths++;
        }
    });
    
    // 需要每个月都获得5枚或以上奖章才能成为榜样之星
    return months.length > 0 && qualifiedMonths === months.length;
}

// 检查学生是否为榜样之星（用于新的导出格式）
function checkIfModelStar(student) {
    const monthlyHistory = student.monthlyHistory || {};
    const currentEarnedStamps = student.earnedStamps || [];
    const currentStampDates = student.stampDates || {};
    
    console.log(`检查学生 ${student.name} 是否为榜样之星:`);
    console.log('- 历史记录:', monthlyHistory);
    console.log('- 当前奖章:', currentEarnedStamps);
    
    // 如果有当前数据但没有历史记录，创建当前月份的记录
    const currentMonthKey = getCurrentMonthKey();
    let allMonthsData = { ...monthlyHistory };
    
    // 如果学生有当前集章数据，添加到月份数据中
    if (currentEarnedStamps.length > 0 || Object.keys(currentStampDates).length > 0) {
        const currentAwards = calculateMonthlyAwards(currentEarnedStamps, student.grade);
        allMonthsData[currentMonthKey] = {
            earnedStamps: [...currentEarnedStamps], // 创建副本避免修改原数据
            stampDates: {...currentStampDates}, // 创建副本避免修改原数据
            awards: currentAwards
        };
        console.log(`- 当前月份 ${currentMonthKey} 奖章数: ${currentAwards}`);
    }
    
    const months = Object.keys(allMonthsData).sort();
    console.log('- 所有月份:', months);
    
    if (months.length === 0) {
        console.log('- 没有任何月份数据，不能成为榜样之星');
        return false;
    }
    
    // 统计每月获得5枚或以上奖章的月份数
    let qualifiedMonths = 0;
    let monthDetails = [];
    
    months.forEach(monthKey => {
        const monthData = allMonthsData[monthKey];
        const monthAwards = monthData ? monthData.awards : 0;
        const isQualified = monthAwards >= 5;
        
        monthDetails.push(`${monthKey}: ${monthAwards}枚奖章 ${isQualified ? '✓达标' : '✗未达标'}`);
        
        if (isQualified) {
            qualifiedMonths++;
        }
    });
    
    console.log('- 各月份奖章情况:');
    monthDetails.forEach(detail => console.log(`  ${detail}`));
    console.log(`- 达标月份: ${qualifiedMonths}/${months.length}`);
    
    // 需要每个月都获得5枚或以上奖章才能成为榜样之星
    const isModelStar = qualifiedMonths === months.length && months.length > 0;
    console.log(`- 最终结果: ${isModelStar ? '是榜样之星 ⭐' : '不是榜样之星'}`);
    
    return isModelStar;
}

// PWA注册函数
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // 使用路径配置检测环境并设置正确的Service Worker路径
            const swPath = PathConfig.getServiceWorkerPath();
            navigator.serviceWorker.register(swPath)
                .then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// PWA安装提示
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // 保存事件以便稍后触发
    deferredPrompt = e;
    // 显示自定义安装按钮或提示
    console.log('PWA可安装');
    
    // 创建自定义安装按钮（如果需要）
    // showInstallPromotion();
});

// 页面加载完成后注册Service Worker
document.addEventListener('DOMContentLoaded', function() {
    registerServiceWorker();
});

// 显示安装提示的函数（可选）
function showInstallPromotion() {
    // 这里可以添加显示安装按钮的代码
    // 例如：document.getElementById('installButton').style.display = 'block';
}

// 触发安装提示的函数（可选）
function installPWA() {
    if (deferredPrompt) {
        // 显示安装提示
        deferredPrompt.prompt();
        
        // 等待用户响应
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('用户接受了PWA安装');
            } else {
                console.log('用户拒绝了PWA安装');
            }
            
            // 清除保存的事件
            deferredPrompt = null;
        });
    }
}
