
import React, { useState, useEffect } from 'react';
import { Breadcrumb, ResourceCard } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { LEARNING_RESOURCES, RESOURCE_TAGS } from '../constants';
import { LearningResource } from '../types';

const LearningResources: React.FC = () => {
  // Simulating state for data from API
  const [resources, setResources] = useState<LearningResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to Strapi
    const fetchResources = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be: await fetch('/api/learning-resources');
        // For now, we use the constant data with a small delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setResources(LEARNING_RESOURCES);
      } catch (error) {
        console.error("Failed to fetch resources", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <>
      <Breadcrumb items={[{ label: 'Học liệu' }, { label: 'Tài liệu tham khảo' }]} />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-8">
            <div className="grid gap-8">
              {isLoading ? (
                // Skeleton loading state
                Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 animate-pulse">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                ))
              ) : (
                resources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary transition text-sm font-medium">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary transition text-sm font-medium">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="px-4 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary transition text-sm font-medium">Trang cuối</button>
            </div>
          </div>
          
          <Sidebar 
            className="lg:w-1/4" 
            tags={RESOURCE_TAGS}
            searchPlaceholder="Nhập từ khóa tìm kiếm..."
            title="Tìm kiếm học liệu"
          />
        </div>
      </div>
    </>
  );
};

export default LearningResources;
