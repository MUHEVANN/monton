<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                "name" => "Naruto Shippuden",
                "slug" => "naruto-shippuden",
                "category" => "Action",
                "video_url"=> "https://www.youtube.com/watch?v=_8RBgibmu1I",
                "thumbnail"=> "https://i.pinimg.com/originals/03/5d/a7/035da7e15db6f7124fa494454be41124.jpg",
                "rating"=> 9,
                "is_featured"=> true,
            ],
            [
                "name" => "Naruto Shippuden 2",
                "slug" => "naruto-shippuden",
                "category" => "Action",
                "video_url"=> "https://www.youtube.com/watch?v=_8RBgibmu1I",
                "thumbnail"=>"https://i.pinimg.com/originals/03/5d/a7/035da7e15db6f7124fa494454be41124.jpg",
                "rating"=> 9,
                "is_featured"=> true,
            ],
            [
                "name" => "Naruto Shippuden 3",
                "slug" => "naruto-shippuden",
                "category" => "Action",
                "video_url"=> "https://www.youtube.com/watch?v=_8RBgibmu1I",
                "thumbnail"=>"https://i.pinimg.com/originals/03/5d/a7/035da7e15db6f7124fa494454be41124.jpg",
                "rating"=> 9,
                "is_featured"=> true,
            ],
        ];
        Movie::insert($movies);
    }
}