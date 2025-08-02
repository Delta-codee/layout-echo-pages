import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import AdminCourseForm from '@/components/AdminCourseForm';

const CreateCourse: React.FC = () => {
  return (
    <AdminLayout>
      <div className="min-h-screen bg-[#0B0B0B]">
        <AdminCourseForm />
      </div>
    </AdminLayout>
  );
};

export default CreateCourse;