<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DogController extends Controller
{
    public function getBreeds()
    {
        $response = Http::get('https://dog.ceo/api/breeds/list/all');

        if ($response->successful()) {
            return response()->json($response->json());
        }

        return response()->json(['error' => 'Cannot fetch breeds right now'], 500);
    }

    public function getDogByBreed($breed)
    {
        $response = Http::get("https://dog.ceo/api/breed/{$breed}/images/random");

        if ($response->successful()) {
            return response()->json($response->json());
        }

        return response()->json(['error' => "Cannot fetch image for breed {$breed}"], 500);
    }
}
