<?php

use App\Http\Controllers\EmployeeController;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//? API url:
Route::get('employees', [EmployeeController::class, 'getEmployees']);

//? API url:
Route::get('employees/{id}', [EmployeeController::class, 'getEmployeeById']);

//? API url:
Route::post('employees/createEmployee', [EmployeeController::class, 'createEmployee']);

//? API url:
Route::put('employees/updateEmployee/{id}', [EmployeeController::class, 'updateEmployee']);

//? API url:
Route::delete('employees/deleteEmployee/{id}', [EmployeeController::class, 'deleteEmployee']);
